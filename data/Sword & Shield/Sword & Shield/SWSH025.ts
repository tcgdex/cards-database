import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Garbodor"
	},

	illustrator: "tetsuya koizumi",
	rarity: "None",
	category: "Pokemon",
	dexId: [569],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Trubbish"
	},

	description: {
		en: "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Poisonous Puddle"
		},

		effect: {
			en: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Sludge Bomb"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card