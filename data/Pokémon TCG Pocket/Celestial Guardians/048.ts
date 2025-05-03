import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Primarina"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Brionne"
	},

	description: {
		en: "To Primarina, every battle is a stage. It takes down its prey with beautiful singing and dancing."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Melodious Healing"
		},

		effect: {
			en: "Once during your turn, you may heal 30 damage from each of your Water Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Surf"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
