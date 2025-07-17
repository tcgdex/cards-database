import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Growlithe - 014/092",
         ja: "Growlithe -014/092",
         fr: "Growlithe - 014/092",
         de: "Growlithe - 014/092",
         es: "Growlithe - 014/092",
         it: "Growlithe - 014/092",
         pt: "Growlithe - 014/092",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [58],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Roar",
            ja: "ro音",
            fr: "Rugir",
            de: "Brüllen",
            es: "Rugido",
            it: "Ruggito",
            pt: "Rugido",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, he or she chooses 1 of them and switches the Defending Pokemon with it.",
            ja: "対戦相手がベンチでポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御するポケモンをそれで切り替えます。",
            fr: "Si votre adversaire a des pokémon bancés, il en choisit l'un d'entre eux et passe le Pokémon en défense avec.",
            de: "Wenn Ihr Gegner ein Bank -Pokemon hat, wählt er oder sie 1 davon aus und wechselt das verteidigende Pokemon damit.",
            es: "Si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y cambia al Pokémon defensor con él.",
            it: "Se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e cambia il Pokemon in difesa con esso.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e troca o Pokémon defensor com ele.",
          },
        },
        {
          cost: ["Fire"],
          name: {
            en: "Firebreathing",
            ja: "火の猛烈な",
            fr: "Incendie",
            de: "Feuergebrochen",
            es: "Fogrea",
            it: "Fireshinghing",
            pt: "Rede de fogo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
