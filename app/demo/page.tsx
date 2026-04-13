export default function DemoDownloadPage() {
  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  return (
    <div>
      <h1>PDF Demo</h1>
      <p>
        <a href={pdfUrl} target="_blank" rel="noreferrer">打开</a>
        {" | "}
        <a href={pdfUrl} download>下载</a>
      </p>
      <iframe src={pdfUrl} title="PDF预览" width="100%" height="600" />
    </div>
  );
}
