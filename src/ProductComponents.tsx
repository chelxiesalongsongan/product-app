type InputProps = {
  label: string;
  type?: string;
  value: string | number;
  onChange: (e: any) => void;
  required?: boolean;
  maxLength?: number;
};

export function InputField({
  label,
  type = "text",
  value,
  onChange,
  required,
  maxLength,
}: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <br />

      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
      />

      <br />
      <br />
    </div>
  );
}

type TextAreaProps = {
  label: string;
  value: string;
  onChange: (e: any) => void;
  required?: boolean;
  maxLength?: number;
};

export function TextAreaField({
  label,
  value,
  onChange,
  required,
  maxLength,
}: TextAreaProps) {
  return (
    <div>
      <label>{label}</label>
      <br />

      <textarea
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
      />

      <br />
      <br />
    </div>
  );
}