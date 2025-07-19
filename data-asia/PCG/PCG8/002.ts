import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Ivysaur",
         ja: "アイビサウルス",
         fr: "Ivysaure",
         de: "IVYSaur",
         es: "Ivysaur",
         it: "Ivysaur",
         pt: "Ivysaur",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [2],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Stretch Vine",
            ja: "ブドウをストレッチします",
            fr: "Vigne étirée",
            de: "Rebe Stretch",
            es: "Enredadera",
            it: "Vine in tratto",
            pt: "Estrear a videira",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon. This attack does 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 der Bankpokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de los Pokémon de banca de tu oponente. Este ataque hace 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon bancado do seu oponente. Este ataque causa 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Sharp Leaf",
            ja: "鋭い葉",
            fr: "Feuille aiguisée",
            de: "Scharfes Blatt",
            es: "Hoja afilada",
            it: "Foglia affilata",
            pt: "Folha afiada",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 40 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 40 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 40 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 40 danos mais 20 mais danos.",
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
