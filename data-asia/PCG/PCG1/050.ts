import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Hypno",
         ja: "催眠",
         fr: "Hypno",
         de: "Hypno",
         es: "Hipno",
         it: "Ipno",
         pt: "Hypno",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [97],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Eerie Aura",
            ja: "不気味なオーラ",
            fr: "Aura étrange",
            de: "Unheimliche Aura",
            es: "Aura misteriosa",
            it: "Aura inquietante",
            pt: "Eerie aura",
          },
          effect: {
            en: "As long as Hypno is your Active PokÃ©mon, put 2 damage counters on each PokÃ©mon that remains Asleep between turns.",
            ja: "Hypnoがアクティブなポカモンである限り、ターンの間に眠っている各ポカモンに2つのダメージカウンターを入れます。",
            fr: "Tant que Hypno est votre poké actif, mettez 2 compteurs de dégâts sur chaque poké mon qui reste endormi entre les virages.",
            de: "Solange Hypno Ihr aktiver Poké Mon Mon ist, setzen Sie 2 Schadenszähler auf jeden Poké mon, der zwischen den Kurven bleibt.",
            es: "Mientras Hypno sea su Poké Mon activo, ponga 2 contadores de daño en cada Poké Mon que permanece dormido entre las curvas.",
            it: "Finché Hypno è il tuo poké attivo, metti 2 contatori di danno su ogni poké mon che rimane addormentato tra i turni.",
            pt: "Enquanto o Hypno for o seu Poké de Mon ativo, coloque 2 balcões de dano em cada Poké que permanece dormindo entre as voltas.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Hypnotic Ray",
            ja: "催眠線",
            fr: "Rayon hypnotique",
            de: "Hypnotischer Strahl",
            es: "Rayo hipnótico",
            it: "Raggio ipnotico",
            pt: "Raio hipnótico",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 20,
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
