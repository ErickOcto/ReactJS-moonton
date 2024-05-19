export default function FlashMessage({ message = "", className}) {
  return (
    <div className={`bg-green-100 flex rounded p-4 text-green-700 text-sm ${className}`}>
        {message}
    </div>
  )
}
