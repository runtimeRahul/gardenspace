
import { useRef } from "react";

const OTP_LENGTH = 6;

export default function OTPInput({
  value,
  onChange,
  disabled = false,
  autoFocus = true,
}) {
  const inputRefs = useRef([]);

  const digits = Array.from(
    { length: OTP_LENGTH },
    (_, index) => value[index] ?? ""
  );

  function focusInput(index) {
    if (index >= 0 && index < OTP_LENGTH) {
      inputRefs.current[index]?.focus();
    }
  }

  function handleChange(index, inputValue) {
    const digit = inputValue.replace(/\D/g, "").slice(-1);
    const nextDigits = [...digits];

    nextDigits[index] = digit;
    onChange(nextDigits.join(""));

    if (digit && index < OTP_LENGTH - 1) {
      focusInput(index + 1);
    }
  }

  function handleKeyDown(index, event) {
    if (event.key === "Backspace") {
      if (digits[index]) {
        const nextDigits = [...digits];
        nextDigits[index] = "";
        onChange(nextDigits.join(""));
      } else if (index > 0) {
        focusInput(index - 1);
      }

      event.preventDefault();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      focusInput(index - 1);
    }

    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      event.preventDefault();
      focusInput(index + 1);
    }
  }

  function handlePaste(event) {
    event.preventDefault();

    const pastedDigits = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pastedDigits) return;

    onChange(pastedDigits);

    focusInput(Math.min(pastedDigits.length, OTP_LENGTH - 1));
  }

  return (
    <div
      role="group"
      aria-label="Six-digit verification code"
      className="flex justify-center gap-2 sm:gap-3"
    >
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          aria-label={`Verification digit ${index + 1}`}
          value={digit}
          disabled={disabled}
          autoFocus={autoFocus && index === 0}
          maxLength={1}
          onChange={(event) =>
            handleChange(index, event.target.value)
          }
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={index === 0 ? handlePaste : undefined}
          className="h-12 w-10 rounded-xl border border-[#DCE3D8] bg-[#FCFDFB] text-center text-lg font-semibold text-[#173F32] outline-none transition focus:border-[#39764D] focus:ring-4 focus:ring-[#39764D]/15 disabled:cursor-not-allowed disabled:opacity-60 sm:h-14 sm:w-12 sm:text-xl"
        />
      ))}
    </div>
  );
}
