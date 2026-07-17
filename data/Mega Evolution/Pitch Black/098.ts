import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Zeraora ex",
		fr: "Méga-Zeraora-ex",
		es: "Mega-Zeraora ex",
		'es-mx': "Mega-Zeraora ex",
		de: "Mega-Zeraora-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [807],
	hp: 270,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Thunderous Fist"
		},

		cost: ["Lightning"],

		damage: "60x",

		effect: {
			en: "This attack does 60 damage for each Lightning Energy attached to this Pokémon."
		}
	}, {
		name: {
			en: "Zepto Turn"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		damage: 150,

		effect: {
			en: "Switch this Pokémon with one of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895883,
				tcgplayer: 704855
			}
		},
	],
}

export default card
