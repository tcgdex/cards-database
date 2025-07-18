import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Chuck's Granbull",
         ja: "チャックのグランブル",
         fr: "Granbull de Chuck",
         de: "Chucks Granbull",
         es: "Granbull de Chuck",
         it: "Chuck's Granbull",
         pt: "Granbull de Chuck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [210],
      hp: 60,
      types: ["Colorless"],
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
            en: "If your opponent has any Benched Pokemon, he or she chooses 1 of them and switches it with the Defending Pokemon.",
            ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。",
            fr: "Si votre adversaire a des pokémon bancés, il en choisit l'un d'entre eux et le change avec le Pokémon en défense.",
            de: "Wenn Ihr Gegner ein Bank -Pokemon hat, wählt er oder sie 1 davon aus und wechselt es mit dem verteidigenden Pokémon.",
            es: "Si tu oponente tiene algún Pokémon de banca, él o ella elige 1 de ellos y lo cambia con el Pokémon defensor.",
            it: "Se il tuo avversario ha dei Pokemon in panchina, ne sceglie uno e lo cambia con il Pokemon in difesa.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, ele escolhe 1 deles e o troca com o Pokémon atual.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Chomp",
            ja: "chomp",
            fr: "Chomper",
            de: "Chomp",
            es: "Acompañar",
            it: "Chomp",
            pt: "Chomp",
          },
          effect: {
            en: "Flip a number of coins equal to the number of damage counters on Chuck's Granbull. This attack does 10 damage plus 10 more damage for each heads.",
            ja: "チャックのグランブルのダメージカウンターの数に等しい多数のコインをひっくり返します。この攻撃は、10ダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de compteurs de dégâts sur Granbull de Chuck. Cette attaque fait 10 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Anzahl der Schadenszähler auf Chucks Granbull entsprechen. Dieser Angriff verursacht 10 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de contadores de daños en el Granbull de Chuck. Este ataque hace 10 daños más 10 daños más para cada cabezal.",
            it: "Capovolgi un numero di monete pari al numero di contatori di danno sul Granbull di Chuck. Questo attacco infligge 10 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de contadores de danos no Granbull de Chuck. Este ataque causa 10 danos mais 10 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
