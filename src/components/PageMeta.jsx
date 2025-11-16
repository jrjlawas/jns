import favicon from "@/assets/img/logo/fav-logo1.png";
const PageMeta = ({ title, description, icon }) => {
  return (
    <>
      <title>{title ?? "Helpy"}</title>
      {description && <meta property="og:description" content={description} />}
      <link rel="icon" href={icon ?? favicon} type="image/png" />
    </>
  );
};
export default PageMeta;
