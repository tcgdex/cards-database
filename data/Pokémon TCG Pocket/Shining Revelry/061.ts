import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff"
	},

	illustrator: "miki kudo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Jigglypuff"
	},

	description: {
		en: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Comforting Song"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from your Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Gentle Slap"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card