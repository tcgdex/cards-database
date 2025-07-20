import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Kabutops",
         ja: "カブトップス",
         fr: "Kabutops",
         de: "Kabutops",
         es: "Kabutops",
         it: "Kabutops",
         pt: "Kabutops",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 90,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 20,
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Hydrocutter",
            ja: "ハイドカッター",
            fr: "Hydrocutter",
            de: "Hydrocutter",
            es: "Hidrocutter",
            it: "Idrocutter",
            pt: "Hidrocutter",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Energy cards attached to Kabutops. This attack does 40 damage times the number of heads. You can't flip more than 3 coins in this way.",
            ja: "Kabutopsに取り付けられたエネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。この方法で3つ以上のコインをひっくり返すことはできません。",
            fr: "Retournez un certain nombre de pièces égales au nombre de cartes d'énergie attachées aux kabutops. Cette attaque fait 40 dégâts de temps le nombre de têtes. Vous ne pouvez pas retourner plus de 3 pièces de cette manière.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der an Kabutops befestigten Energiekarten entspricht. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe. Auf diese Weise können Sie nicht mehr als 3 Münzen umdrehen.",
            es: "Voltee una serie de monedas igual al número de tarjetas de energía unidas a Kabutops. Este ataque hace 40 veces el número de cabezas. No puedes voltear más de 3 monedas de esta manera.",
            it: "Capovolgi un numero di monete pari al numero di carte di energia collegate a Kabutops. Questo attacco fa 40 danni il numero di teste. Non puoi capovolgere più di 3 monete in questo modo.",
            pt: "Vire uma série de moedas iguais ao número de cartões de energia anexados a Kabutops. Este ataque causa 40 danos vezes o número de cabeças. Você não pode virar mais de 3 moedas dessa maneira.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
