import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Darkrai ex",
		fr: "Méga-Darkrai-ex",
		es: "Mega-Darkrai ex",
		'es-mx': "Mega-Darkrai ex",
		de: "Mega-Darkrai-ex"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [491],
	hp: 280,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Dusk Raid"
		},

		cost: ["Darkness", "Darkness"],

		damage: "110+",

		effect: {
			en: "If any of your Benched Pokémon have any damage counters on them, this attack does 110 more damage."
		}
	}, {
		name: {
			en: "Abyss Eye"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon is affected by any Special Condition, it is now Knocked Out."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895901,
				tcgplayer: 704873
			}
		},
	],
}

export default card
