import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Charizard",
         ja: "暗いカリザード",
         fr: "Charizard sombre",
         de: "Dunkler Charizard",
         es: "Charizard oscuro",
         it: "Dark Charizard",
         pt: "Charizard escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [6],
      hp: 80,
      types: ["Fire"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Nail Flick",
            ja: "ネイルフリック",
            fr: "Coup de ongle",
            de: "Nagelfilm",
            es: "Palanca de uñas",
            it: "Flick unghie",
            pt: "Filme de unha",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Continuous Fireball",
            ja: "連続した火の玉",
            fr: "Boule de feu continue",
            de: "Kontinuierlicher Feuerball",
            es: "Bola de fuego continua",
            it: "Palla di fuoco continua",
            pt: "Bola de fogo contínua",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Fire Energy cards attached to Dark Charizard. This attack does 50 damage times the number of heads. Discard a number of Fire Energy cards attached to Dark Charizard equal to the number of heads.",
            ja: "ダークチャリザードに取り付けられた消防エネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の50回のダメージ時間を実行します。頭の数に等しい暗いリザードに取り付けられた多くの火エネルギーカードを廃棄します。",
            fr: "Retournez un certain nombre de pièces égales au nombre de cartes d'énergie de feu attachées à Dark Charizard. Cette attaque fait 50 dégâts de temps le nombre de têtes. Jeter un certain nombre de cartes d'énergie de feu attachées à Dark Charizard égal au nombre de têtes.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der an Dark Charizard befestigten Brandenergiekarten entsprechen. Dieser Angriff verursacht 50 Schadenszeiten der Anzahl der Köpfe. Verwerfen Sie eine Reihe von Feuerergiekarten, die an Dark Charizard verbunden sind, gleich der Anzahl der Köpfe.",
            es: "Voltee una serie de monedas igual al número de tarjetas de energía de fuego unidas a Dark Charizard. Este ataque hace 50 veces el número de cabezas. Deseche una serie de tarjetas de energía de fuego unidas a Dark Charizard igual al número de cabezas.",
            it: "Ribalta una serie di monete pari al numero di carte di energia del fuoco collegate a Dark Charizard. Questo attacco fa 50 danni volte il numero di teste. Scartare una serie di carte di energia del fuoco attaccate a Dark Charizard pari al numero di teste.",
            pt: "Vire uma série de moedas iguais ao número de cartões de energia de incêndio anexados a Charizard escuro. Este ataque causa 50 danos vezes o número de cabeças. Descarte uma série de cartões de energia de incêndio anexados a Charizard escuro igual ao número de cabeças.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
