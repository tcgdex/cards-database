import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lunala ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	evolveFrom: {
		en: "Cosmoem"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Psychic Connect"
		},

		effect: {
			en: "Once during your turn, you may move all  Energy from 1 of your Benched  Pokémon to your Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Lunar Blast"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card