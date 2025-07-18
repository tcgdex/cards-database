import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Clair's Blastoise",
         ja: "クレアの爆風",
         fr: "Blastoise de Clair",
         de: "Clairs Blastoise",
         es: "Blastoise de Clair",
         it: "Blastoise di Clair",
         pt: "Clair's Blastoise",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [9],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Hydro Blast",
            ja: "ハイドロブラスト",
            fr: "Hydro Blast",
            de: "Hydro Blast",
            es: "Explosión hidroeléctrica",
            it: "Hydro Blast",
            pt: "BLAST HYDRO",
          },
          effect: {
            en: "Flip a coin for each Water Energy attached to Clair's Blastoise. This attack does 20 damage plus 10 more damage for each heads.",
            ja: "Clair's Blastoiseに取り付けられた各水エネルギーのコインをひっくり返します。この攻撃は20のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez une pièce pour chaque énergie d'eau attachée au blastoise de Clair. Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Münze für jede Wasserenergie an, die an Clairs Blastoise befestigt ist. Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una moneda para cada energía de agua unida a la explosión de Clair. Este ataque hace 20 daños más 10 daños más para cada cabezal.",
            it: "Capovolgi una moneta per ogni energia idrica attaccata al blastoise di Clair. Questo attacco infligge 20 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma moeda para cada energia da água presa ao Blastoise de Clair. Este ataque causa 20 de dano mais 10 mais danos para cada cabeça.",
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
