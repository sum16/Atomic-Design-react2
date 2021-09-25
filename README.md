## Atoms  
・機能的にこれ以上分割できないUIの最小要素  
  

## Molecules  
・最小単位の機能（Atoms）を組み合わせて*ユーザーの具体的な動機に応える機能の単位*でUIをコンポーネント化   
 -なんのために「ボタン」をクリックするのか  
 -なんのために「テキスト」を入力するのか  
  

## Organisms  
・*単体コンポーネントで完結する*コンテンツを提供  
・AtomsやMoleculesで構成されるコンポーネント群  
・Organisms層のコンポーネント自体も*別のOrganisms層のコンポーネントを構成する要素になりえる*  
  

## Templates  
・ページの雛形で*具体的なコンテンツは持たない*  
・AtomsやMolecules、Organism層などのコンポーネントを実際のプロダクトのページと同様に配置   
・**コンポーネントがページ上で正しくレイアウトされているかを確認する**のが目的  
  

## Pages  
・Templates層のコンポーネントに実際のコンテンツを流し込んだもの  
・**ユーザーがプロダクト上で実際に触れられる**  
  
  

Atoms  
  
-Typography 文字列表示  
-Input テキスト入力  
-Button ボタン  
-Image 画像  
-Spinner スピナー(ローディングを表す部品)  
  
Organisms    
  
-Header ヘッダ  
-SearchForm 検索フォーム  
-VideosListItem 動画リストアイテム   
-VideosList 動画リスト  

Templates  
  
-VideosListTemplates 動画一覧で使うテンプレート  

Pages  
  
-TopPage トップページ  