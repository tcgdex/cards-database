import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [942],
	set: Set,

	name: {
		en: "Maschiff",
		fr: "Grondogue",
		es: "Maschiff",
		it: "Maschiff",
		pt: "Maschiff",
		de: "Mobtiff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			pt: "Presa Sombria",
			de: "Fänge der Dunkelheit"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
    {
      type: "reverse",
      size: "standard"
    },
    {
      type: "normal",
      size: "standard"
    }
  ],

	illustrator: "kantaro",

	description: {
		en: "Its well-developed jaw and fangs are strong enough to crunch through boulders, and its thick fat makes for an excellent defense.",
	},

	thirdParty: {
        cardmarket: 702430,
        tcgplayer: 488025
    }
}

export default card