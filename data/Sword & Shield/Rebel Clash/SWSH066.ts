import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Charizard"
	},

	illustrator: "NC Empire",
	rarity: "None",
	category: "Pokemon",
	dexId: [6],
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon"
	},

	description: {
		en: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Battle Sense"
		},

		effect: {
			en: "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Royal Blaze"
		},

		effect: {
			en: "This attack does 50 more damage for each Leon card in your discard pile."
		},

		damage: "100+"
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card