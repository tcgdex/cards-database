import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Alcremie VMAX",
		fr: "Charmilly VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 310,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Alcremie V",
		fr: "Charmilly-V"
	},

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	attacks: [{
		name: {
			en: "Adornment",
			fr: "Décoration"
		},

		effect: {
			en: "For each of your Benched Pokémon, search your deck for a Psychic Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			fr: "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Énergie Psychic, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "G-Max Whisk",
			fr: "Fouet G-Max"
		},

		effect: {
			en: "Discard any amount of Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez autant d’Énergies que vous voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon."
		},

		damage: "60×",
		cost: ["Psychic", "Psychic"]
	}]
}

export default card
