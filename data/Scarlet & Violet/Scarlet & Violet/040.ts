import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [935],
	set: Set,

	name: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
    {
      type: "normal",
      size: "standard"
    },
    {
      type: "reverse",
      size: "standard"
    }
  ],

	illustrator: "nagimiso",

	description: {
		en: "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},

	thirdParty: {
        cardmarket: 702335,
        tcgplayer: 487882
    }
}

export default card