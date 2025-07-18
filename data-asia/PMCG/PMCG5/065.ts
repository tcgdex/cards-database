import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Clefable",
         ja: "エリカのクレファー",
         fr: "Clefable d'Erika",
         de: "Erika ist geschmeidig",
         es: "Clefable de Erika",
         it: "Erika's Clefable",
         pt: "Erika's Clefable",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [36],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fairy Power",
            ja: "妖精の力",
            fr: "Fée",
            de: "Feenkraft",
            es: "Poder de hadas",
            it: "Potere fata",
            pt: "Poder de fada",
          },
          effect: {
            en: "Flip a coin. If heads, you may return any number of your Pokemon in play and all cards attached to them to your hand.",
            ja: "コインをひっくり返します。頭の場合は、ポケモンをプレイし、すべてのカードを手に取り付けている任意の数のポケモンを返すことができます。",
            fr: "Retourner une pièce. Si les têtes, vous pouvez retourner n'importe quel nombre de vos Pokémon en jeu et toutes les cartes qui leur sont attachées à votre main.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, können Sie eine beliebige Anzahl Ihres Pokémon im Spiel und alle Karten an Ihre Hand angeschlossen.",
            es: "Voltea una moneda. Si se dirige, puede devolver cualquier número de su Pokémon en juego y todas las cartas adjuntas a su mano.",
            it: "Capovolgi una moneta. Se le teste, puoi restituire un numero qualsiasi del tuo Pokemon in gioco e tutte le carte collegate a loro alla tua mano.",
            pt: "Vire uma moeda. Se as cabeças, você poderá devolver qualquer número de seu Pokémon em jogo e todas as cartas anexadas a eles à sua mão.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Moon Impact",
            ja: "月の衝撃",
            fr: "Impact de la lune",
            de: "Mondwirkung",
            es: "Impacto en la luna",
            it: "Impatto sulla luna",
            pt: "Impacto da lua",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
