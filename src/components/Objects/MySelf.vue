<script setup lang="ts">
</script>

<template>
  <div>
    <h1><ruby>名和亮雅<rt>Ryoga Nawa</rt></ruby></h1>

    <h3>基本情報</h3>
    <v-table>
      <tbody>
        <tr>
          <td class="left">生年月日</td>
          <td>1997年12月2日</td>
        </tr>
        <tr>
          <td class="left">最終学歴</td>
          <td>2018年3月 新潟デザイン専門学校イラストレーション科卒業</td>
        </tr>
      </tbody>
    </v-table>

    <h3>スキル</h3>
    <v-table>
      <tbody>
        <tr>
          <td class="left">言語</td>
          <td>PHP 8 / JavaScript ES2015以降</td>
        </tr>
        <tr>
          <td class="left">フレームワーク</td>
          <td>Laravel 8以降 / Vue.js（Nuxt）2系</td>
        </tr>
      </tbody>
    </v-table>

    <h3>独学のみ</h3>
    <v-table>
      <tbody>
        <tr>
          <td class="left">言語</td>
          <td>Ruby 2.6</td>
        </tr>
        <tr>
          <td class="left">フレームワーク</td>
          <td>Ruby on Rails 6</td>
        </tr>
        <tr>
          <td class="left">ツール</td>
          <td>Docker / docker-compose</td>
        </tr>
        <tr>
          <td class="left">PaaS</td>
          <td>Netlify</td>
        </tr>
      </tbody>
    </v-table>

    <h3>やったことはないが興味があるもの</h3>
    <p>TypeScript / CircleCI / AWS ECR・ECS・Fargate / Render.com / IaSQL</p>

    <h2>職務経歴（エンジニアとして）</h2>

    <v-table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th class="text-left">職務内容</th>
          <th class="text-left">職務の中で学んだことや得られた知識・スキルなど</th>
          <th class="text-left">退職理由</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left">
            2022年4月〜：アルバイト
          </td>
          <td>
            <ul>
              <li>ドキュメントのないレガシーシステムの仕様調査</li>
              <li>レガシーシステムのSaaS化のための要件定義</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>要件定義</li>
              <li>テーブル設計</li>
              <li>ドメイン駆動設計</li>
            </ul>
          </td>
          <td></td>
        </tr>

        <tr>
          <td class="left">
            2021年8月〜2022年3月：独学
          </td>
          <td>
            <ul>
              <li>Vue.js入門</li>
              <li>Nuxt・Vuetify・Netlify入門</li>
              <li>Laravelでポートフォリオ用アプリ開発</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Nuxtを使ったWebサイト制作</li>
              <li>コンポーネント設計</li>
              <li>JAMStackなブログサイトの構築</li>
              <li>Laravelのサービスコンテナに関する知識</li>
              <li>リポジトリパターン</li>
              <li>DI / 依存性注入</li>
              <li>機能テストの実装</li>
            </ul>
          </td>
          <td></td>
        </tr>

        <tr>
          <td class="left">
            2021年1月〜7月：準委任契約
          </td>
          <td>
            <ul>
              <li>Laravelフレームワークでの基本的な実装</li>
              <li>jQuery / ES6でのフロントエンド実装・IE対応</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Laravelフレームワークでのクーロンジョブの実装</li>
              <li>Eloquentでのテーブル結合等による複雑なクエリの実行</li>
              <li>Promiseを使用した基礎的な非同期処理</li>
              <li>クラス構文による基礎的なオブジェクト指向プログラミング</li>
              <li>PHP UnitやJestを使用した単体テスト実装</li>
              <li>Gitやチャットツールを使用したチーム開発経験</li>
            </ul>
          </td>
          <td>
            しばらくWordPress案件しかないとのことだったため、現場で使っていなかったDockerやVue.jsの独学のため契約解除
          </td>
        </tr>

      </tbody>
    </v-table>

  </div>
</template>

<style lang="scss" scoped>
  .left {
    width: 180px !important;
  }

</style>