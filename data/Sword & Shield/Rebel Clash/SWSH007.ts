import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Frosmoth"
	},

	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	dexId: [873],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snom"
	},

	description: {
		en: "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ice Dance"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Aurora Beam"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card