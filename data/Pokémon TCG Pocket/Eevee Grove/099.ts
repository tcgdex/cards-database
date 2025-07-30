import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Gardevoir"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kirlia"
	},

	description: {
		en: "To protect its Trainer, it will expend all its psychic\npower to create a small black hole."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Psy Shadow"
		},

		effect: {
			en: "Once during your turn, you may take a {P} Energy from your Energy Zone and attach it to the {P} Pokémon in the Active Spot."
		}
	}],

	attacks: [{
		name: {
			en: "Psyshot"
		},

		damage: 60,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card