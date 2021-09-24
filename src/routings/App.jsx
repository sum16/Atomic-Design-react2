import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopPage from '~/components/pages/TopPage';
import PlayerPage from '~/components/pages/PlayerPage';
import NotFoundPage from '~/components/pages/NotFoundPage';

const AppRouting = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact title="トップ" component={TopPage} />
      <Route path="/play/:videoId" title="動画再生" component={PlayerPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouting;


// <BrowserRouter>はreact-router-domのコンポーネントで、UIとURLを同期してくれるコンポーネント
// <Swtich>は子要素の<Route>要素のうち、pathで指定されているものにマッチしたものを描画する機能をもつコンポーネント

// <Route>のpathにはURLパスを、componentにはpathにマッチした時に表示したいコンポーネントを、
// titleにはその時のページタイトルを設定したprops（コンポーネントに渡すデータをpropsを呼ぶ）を渡す 

// <Route path="/play/:videoId" ... />のように設定すると、:videoIdの部分をパラメータとして扱う。
// 例えば/play/a,や/play/123のようなアドレスがこのルーティング設定にマッチするようになります。