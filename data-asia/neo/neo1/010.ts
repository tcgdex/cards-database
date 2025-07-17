import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Ledian",
         ja: "レディアン",
         fr: "Lédien",
         de: "Ledian",
         es: "Lediano",
         it: "Ledian",
         pt: "Ledian",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [166],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Baton Pass",
            ja: "バトンパス",
            fr: "Baton",
            de: "Baton Pass",
            es: "Pase de batón",
            it: "Pass di testimone",
            pt: "Baton Pass",
          },
          effect: {
            en: "If you have any Grass Pokemon on your Bench, remove all Grass Energy cards from Ledian and attach them to 1 of those Pokemon, then switch Ledian with that Pokemon.",
            ja: "ベンチに草のポケモンがある場合は、Ledianからすべての草のエネルギーカードを取り外し、それらのポケモンの1つに取り付けてから、そのポケモンとLedianを切り替えます。",
            fr: "Si vous avez des pokemon d'herbe sur votre banc, retirez toutes les cartes d'énergie de l'herbe de Ledian et attachez-les à 1 de ces pokemon, puis commutez Ledian avec ce pokemon.",
            de: "Wenn Sie Graspokémon auf Ihrer Bank haben, entfernen Sie alle Grasergiekarten von LEDIAN und befestigen Sie sie an 1 dieser Pokemon, dann wechseln Sie LEDIAN mit diesem Pokemon.",
            es: "Si tiene algún Pokémon de hierba en su banco, retire todas las tarjetas de energía de hierba de Ledian y adhiérase a 1 de esos Pokémon, luego cambie el Ledian con ese Pokémon.",
            it: "Se hai qualche Pokemon in erba sulla panchina, rimuovi tutte le carte di energia dell'erba da Ledian e attaccali a 1 di quei Pokemon, quindi cambia Ledian con quel Pokemon.",
            pt: "Se você tiver algum Pokémon de grama em seu banco, remova todos os cartões de energia da grama do LEDIAN e anexe -os a 1 desses Pokémon, depois mude de Ledian com esse Pokemon.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
