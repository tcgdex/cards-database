import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charmilly VMAX",
		en: "Alcremie VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Charmilly-V",
		en: "Alcremie V"
	},

	attacks: [{
		name: {
			fr: "Décoration",
			en: "Adornment"
		},

		effect: {
			fr: "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Énergie Psychic, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			en: "For each of your Benched Pokémon, search your deck for a Psychic Energy card and attach it to that Pokémon. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Fouet G-Max",
			en: "G-Max Whisk"
		},

		effect: {
			fr: "Défaussez autant d’Énergies que vous voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			en: "Discard any amount of Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way."
		},

		damage: "60×",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card