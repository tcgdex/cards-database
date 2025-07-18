import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Vigoroth",
         ja: "vigoroth",
         fr: "Vigoroth",
         de: "Vigoroth",
         es: "Vigoroso",
         it: "Vigoroth",
         pt: "Vigoroth",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [288],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Vigorous Aura",
            ja: "活発なオーラ",
            fr: "Aura vigoureuse",
            de: "Kräftige Aura",
            es: "Aura vigorosa",
            it: "Aura vigorosa",
            pt: "Aura vigorosa",
          },
          effect: {
            en: "As long as Vigoroth is your Active PokÃ©mon, attacks by each player's Active PokÃ©mon (both if there are 2) do 10 more damage to any Active PokÃ©mon (before applying Weakness and Resistance).",
            ja: "Vigorothがあなたのアクティブなポカモンである限り、各プレイヤーのアクティブなPokã©Mon（両方が2つある場合）による攻撃は、アクティブなPokã©Mon（脱力感と抵抗を適用する前に）にさらに10ダメージを与えます。",
            fr: "Tant que Vigoroth se trouve votre poké actif, les attaques par Pokã © Mon active de chaque joueur (les deux s'il y en a 2) infligez 10 dommages supplémentaires à tout Pokã © Mon actif (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange Vigoroth Ihr aktiver Pokémon ist, haben die Angriffe der aktiven Poké Mon (beides 2) Angriffe jedes Spielers an aktiven Poké Mon (vor dem Auftragen von Schwäche und Widerstand) 10 weitere Schäden.",
            es: "Mientras Vigoroth sea su Poké Mon activo, los ataques del Poké activo de cada jugador (ambos si hay 2) hacen 10 daños más a cualquier Poké Mon activo (antes de aplicar debilidad y resistencia).",
            it: "Finché Vigoroth è il tuo poké attivo, gli attacchi del poké attivo di ciascun giocatore (entrambi se ci sono 2) fai altri 10 danni a qualsiasi poké attivo (prima di applicare debolezza e resistenza).",
            pt: "Enquanto o Vigoroth for o seu Poké Mon ativo, os ataques do Poké Mon ativo de cada jogador (ambos se houver 2) causam mais 10 danos a qualquer Poké Mon ativo (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
