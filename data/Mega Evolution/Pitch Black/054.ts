import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Thievul",
		fr: "Roublenard",
		es: "Thievul",
		'es-mx': "Thievul",
		de: "Gaunux"
	},

	illustrator: "GOTO minori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [828],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Nickit"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Skill Thief"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If you have no cards in your hand, choose 1 of your opponent's Pokémon's attacks and use it as this attack."
		}
	}, {
		name: {
			en: "Sharp Fangs"
		},

		cost: ["Darkness", "Colorless", "Colorless"],

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895839,
				tcgplayer: 704811
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895839,
				tcgplayer: 704811
			}
		},
	],
}

export default card
