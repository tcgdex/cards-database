import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Omanyte",
         ja: "オマニテ",
         fr: "Omanyte",
         de: "Omanyte",
         es: "Omanyte",
         it: "Omanyte",
         pt: "Omanyte",
      },


      category: "Pokemon",
      dexId: [138],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Influence",
            ja: "影響",
            fr: "Influence",
            de: "Beeinflussen",
            es: "Influencia",
            it: "Influenza",
            pt: "Influência",
          },
          effect: {
            en: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokemon as Basic Pokemon.",
            ja: "オマニテ、カブト、アエロダクチル、リリープ、またはアノリスをデッキで検索し、そのうちの2つをベンチに入れます。その後、デッキをシャッフルします。新しいベンチポケモンを基本的なポケモンとして扱います。",
            fr: "Recherchez votre deck pour Omanyte, Kabuto, Aerodactyl, Lileep ou Anorith et en mettez jusqu'à 2 d'entre eux sur votre banc. Mélanger votre deck par la suite. Traitez le nouveau Pokémon bancné comme un pokemon de base.",
            de: "Suchen Sie Ihr Deck nach Omanyte, Kabuto, Aerodactyl, Lileep oder Anorith und legen Sie bis zu 2 davon auf Ihre Bank. Mischen Sie anschließend Ihr Deck. Behandle das neue Bankpokémon als Basic -Pokemon.",
            es: "Busque en su mazo para Omanyte, Kabuto, Aerodactyl, Lileep o Anorith y coloque hasta 2 de ellos en su banco. Baraja tu mazo después. Trate al nuevo Pokémon de banca como Pokémon básico.",
            it: "Cerca nel tuo mazzo Omanyte, Kabuto, Aerodactyl, Lileep o Anorith e mettiti fino a 2 di loro sulla panchina. Shuffle il tuo mazzo in seguito. Tratta il nuovo Pokemon in panchina come Pokemon di base.",
            pt: "Procure seu baralho para Omanyte, Kabuto, Aerodactyl, Lileep ou Anorith e coloque até 2 deles em seu banco. Afaste seu baralho depois. Trate o novo Pokémon em banco como Pokémon básico.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Mud Shot",
            ja: "泥ショット",
            fr: "Coup de boue",
            de: "Schlammschuss",
            es: "Disparo de barro",
            it: "Scatto di fango",
            pt: "Tiro de lama",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
