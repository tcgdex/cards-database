import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Charmeleon",
         ja: "ブレインのチャームレオン",
         fr: "Charmeleon de Blaine",
         de: "Blaines Charmeleon",
         es: "Charmeleon de Blaine",
         it: "Blaine's Charmeleon",
         pt: "Charmeleon de Blaine",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [5],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Fire Claws",
            ja: "火の爪",
            fr: "Griffes de feu",
            de: "Feuerkrallen",
            es: "Fogatas",
            it: "Artigli di fuoco",
            pt: "Garras de fogo",
          },
          damage: 30,
        },
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Bonfire",
            ja: "bonき火",
            fr: "Feu",
            de: "Feuer",
            es: "Hoguera",
            it: "Falò",
            pt: "Fogueira",
          },
          effect: {
            en: "Flip 3 coins. For each heads, discard 1 Fire Energy card attached to Blaine's Charmeleon. If you can't discard Energy cards, this attack does nothing. This attack does 10 damage times the number of heads to each of your opponent's Pokemon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "3コインをフリップします。それぞれの頭について、ブレインのチャームレオンに取り付けられた1つのファイアエネルギーカードを捨てます。エネルギーカードを破棄できない場合、この攻撃は何もしません。この攻撃は、対戦相手のポケモンのそれぞれにヘッド数を10回ダメージします。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "Flip 3 pièces. Pour chaque tête, jetez 1 carte d'énergie de feu attachée au Charmeleon de Blaine. Si vous ne pouvez pas éliminer les cartes d'énergie, cette attaque ne fait rien. Cette attaque fait 10 dégâts de temps le nombre de têtes à chacun des pokemon de votre adversaire. N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "3 Münzen umdrehen. Für jeden Köpfe entsorgen Sie 1 Brandenergiekarte, die an Blaines Charmeleon angebracht ist. Wenn Sie keine Energiekarten entwerfen können, tut dieser Angriff nichts. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe zu jedem Pokémon Ihres Gegners. Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "Flip 3 monedas. Para cada cabezal, deseche 1 tarjeta de energía de fuego unida al encantador de Blaine. Si no puedes descartar cartas de energía, este ataque no hace nada. Este ataque hace 10 veces el número de cabezas a cada Pokémon de tu oponente. No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Flip 3 monete. Per ogni teste, scartare 1 carta di energia di fuoco attaccata a Blaine's Charmeleon. Se non riesci a scartare le carte energetiche, questo attacco non fa nulla. Questo attacco fa 10 danni volte il numero di teste a ciascuno dei Pokemon del tuo avversario. Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Flip 3 moedas. Para cada cabeça, descarte 1 cartão de energia de incêndio anexado ao Charmeleon de Blaine. Se você não pode descartar os cartões de energia, esse ataque não fará nada. Esse ataque causa 10 danos vezes o número de cabeças para cada um dos Pokémon do seu oponente. Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
