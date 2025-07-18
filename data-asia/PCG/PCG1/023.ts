import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Rapidash",
         ja: "Rapidash",
         fr: "Rapide",
         de: "Rapidash",
         es: "Rapas",
         it: "Rapidash",
         pt: "Rapidash",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [78],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Fiery Aura",
            ja: "燃えるようなオーラ",
            fr: "Aura ardente",
            de: "Feurige Aura",
            es: "Aura ardiente",
            it: "Aura fiey",
            pt: "Aura ardente",
          },
          effect: {
            en: "As long as Rapidash is your Active PokÃ©mon, put 4 damage counters instead of 2 on Burned PokÃ©mon between turns.",
            ja: "RapidashがアクティブなPokã©Monである限り、ターンの間に燃やされたポカモンに2つではなく4つのダメージカウンターを入れます。",
            fr: "Tant que Rapidash est votre poké actif, mettez 4 compteurs de dégâts au lieu de 2 sur Poké brûlé entre les virages.",
            de: "Solange Rapidash Ihr aktiver Poké Mon Mon ist, setzen Sie 4 Schadenszähler anstelle von 2 auf verbranntem Poké Mon zwischen den Kurven.",
            es: "Mientras Ratashash sea su Poké Mon activo, coloque 4 contadores de daño en lugar de 2 en Poké Mon quemado entre turnos.",
            it: "Finché Rapidash è il tuo poké attivo, metti 4 contatori di danno invece di 2 su Poké mondiato tra i turni.",
            pt: "Enquanto o Rapidash for o seu Poké de Mon ativo, coloque 4 contadores de danos em vez de 2 em Poké queimado entre voltas.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Searing Flame",
            ja: "炎を焼きます",
            fr: "Flamme brûlante",
            de: "Brennende Flamme",
            es: "Llama abrasadora",
            it: "Fiamma bruciante",
            pt: "Chama queimando",
          },
          effect: {
            en: "The Defending Pokemon is now Burned.",
            ja: "防御ポケモンは現在燃やされています。",
            fr: "Le Pokémon en défense est maintenant brûlé.",
            de: "Das verteidigende Pokemon ist jetzt verbrannt.",
            es: "El Pokémon defensor ahora está quemado.",
            it: "Il Pokemon in carica viene ora bruciato.",
            pt: "O Pokémon atual agora está queimado.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Rear Kick",
            ja: "リアキック",
            fr: "Coup de pied arrière",
            de: "Heck -Kick",
            es: "Patada trasera",
            it: "Calcio posteriore",
            pt: "Chute traseiro",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
