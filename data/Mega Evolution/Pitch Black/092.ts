import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it."
	},

	name: {
		en: "Thievul",
		fr: "Roublenard",
		es: "Thievul",
		'es-mx': "Thievul",
		de: "Gaunux"
	},

	illustrator: "Jerky",
	rarity: "Illustration rare",
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
			type: "holo",
			thirdParty: {
				cardmarket: 895876,
				tcgplayer: 704849
			}
		},
	],
}

export default card
