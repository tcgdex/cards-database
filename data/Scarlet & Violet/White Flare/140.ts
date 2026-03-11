import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [568],
	set: Set,

	name: {
		en: "Trubbish",
		fr: "Miamiasme",
		de: "Unratütox",
		it: "Trubbish",
		pt: "Trubbish",
		es: "Trubbish",
		'es-mx': "Trubbish"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Drool",
			fr: "Gluant",
			de: "Sabbern",
			it: "Sbavare",
			pt: "Babar",
			es: "Babeo",
			'es-mx': "Babeo"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Sludge Bomb",
			fr: "Bombe Beurk",
			de: "Matschbombe",
			it: "Fangobomba",
			pt: "Bomba de Lodo",
			es: "Bomba Lodo",
			'es-mx': "Bomba Lodo"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836164,
			tcgplayer: 642253
		}
	},
],
}

export default card