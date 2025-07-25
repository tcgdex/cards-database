import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Graveler",
         ja: "砂利",
         fr: "Graveleuse",
         de: "Schotter",
         es: "Grava",
         it: "Graveler",
         pt: "Grave",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [75],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Grind",
            ja: "粉砕",
            fr: "Moudre",
            de: "Schleifen",
            es: "Moler",
            it: "Macinare",
            pt: "Moer",
          },
          effect: {
            en: "Does 10 damage times the amount of Energy attached to Graveler.",
            ja: "砂利に付随するエネルギーの量を10回損傷します。",
            fr: "Fait 10 dommages à la fois la quantité d'énergie attachée au gravier.",
            de: "Schädigt 10 Mal die Energie, die an Kegraer angebracht ist.",
            es: "Hace 10 tiempos de daño la cantidad de energía unida al grava.",
            it: "Fa 10 danni volte la quantità di energia attaccata alla ghiaia.",
            pt: "10 danos vezes a quantidade de energia ligada ao Graveler.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Big Explosion",
            ja: "大きな爆発",
            fr: "Grande explosion",
            de: "Große Explosion",
            es: "Gran explosión",
            it: "Grande esplosione",
            pt: "Grande explosão",
          },
          effect: {
            en: "Does 80 damage to each Active Pokemon (both yours and your opponent's).",
            ja: "各アクティブなポケモン（あなたと相手の両方）に80のダメージを与えます。",
            fr: "Fait 80 dégâts à chaque Pokémon actif (le vôtre et celui de votre adversaire).",
            de: "Schädigt 80 jedes aktive Pokémon (sowohl Ihr als auch Ihr Gegner).",
            es: "Hace 80 daños a cada Pokémon activo (tanto el tuyo como el de tu oponente).",
            it: "Fa 80 danni a ciascun Pokemon attivo (sia il tuo che il tuo avversario).",
            pt: "Causa 80 danos a cada Pokémon ativo (tanto o seu quanto o do seu oponente).",
          },
        },
      ],

      retreat: 3,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
