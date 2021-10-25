import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [812],
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		en: "Thwackey"
	},

	description: {
		en: "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Voltage Beat"
		},

		effect: {
			en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			en: "Hammer In"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card