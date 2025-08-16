import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Rhyhorn",
         ja: "ブレインの韻",
         fr: "Rhyhorn de Blaine",
         de: "Blaines Rhyhorn",
         es: "Rhyhorn de Blaine",
         it: "Blaine's Rhyhorn",
         pt: "Rhyhorn de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [111],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Horn Charge",
            ja: "ホーンチャージ",
            fr: "Charge de klaxon",
            de: "Hornladung",
            es: "Carga de bocina",
            it: "Carica",
            pt: "Carga da buzina",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Overrun",
            ja: "オーバーラン",
            fr: "Envahi",
            de: "Überrannt",
            es: "Invadir",
            it: "Invaso",
            pt: "Overnun",
          },
          effect: {
            en: "Flip a coin. If heads and if your opponent has any Benched Pokemon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭と相手がベンチポケモンを持っている場合、そのうち1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes et si votre adversaire a un pokemon banc, choisissez 1 d'entre eux et cette attaque en fait 20 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn Köpfe und wenn Ihr Gegner ein pokémon -Bank -Pokemon hat, wählen Sie 1 davon und dieser Angriff schädigt es 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si las cabezas y si tu oponente tiene algún Pokémon en banca, elija 1 de ellos y este ataque le da 20 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se le teste e se il tuo avversario ha dei Pokemon in panchina, scegli 1 e questo attacco fa 20 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças e se o seu oponente tiver algum Pokémon em banco, escolha 1 delas e este ataque causará 20 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
