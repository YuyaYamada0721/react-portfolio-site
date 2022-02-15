// コンポーネントには主に２種類ある
// ①クラスコンポーネント
// ②関数コンポーネント

// ②
// 一見するとHTMLタグのように見えるが、実際には「最終的には<div>を生成するJavaScript」が裏側で動いている
// 「HeaderコンポーネントはJSXを返している」と理解する事
// コンポーネントをexportしないと外部ファイルから参照できない
// ここはHTMLではなく、JSX
// idはそのままだが、classは違う
// JSXの実態はJavaScriptである、という事はJavaScriptの変数や関数の返り値などもJSX内で展開する事ができる

// const Header = () => {
// export const Header = () => {
//   const componentName = 'Header';
//   const componentName = () => 'Header';
//   return (
//     <div className="test-wrapper">
//       <p className="text">
//       このコンポーネントの名前は{componentName()}です。
//       </p>
//     </div>
//   );
// };
import CoverImage from '../images/cover-image.jpeg';
import ProfileImage from '../images/profile-image.jpeg';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      <div className='overlay'></div>
      <div className='container'>
        <div className='display-table'>
          <div className='display-table-contents'>
            <div className='profile-thumb' style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className='title-text'>Yuya Yamada</h1>
            <h3 className='title-text'>Engineer</h3>
            <ul className='social-icons'>
              <li className='icon-link'>
                <a href="https://twitter.com/roy06299">
                  <FaTwitter color='white' size="2rem" />
                </a>
              </li>
              <li className='icon-link'>
                <a href="https://github.com/YuyaYamada0721">
                  <FaGithub color='white' size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
