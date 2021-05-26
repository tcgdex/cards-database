import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charmilly VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Charmilly-V"
	},

	attacks: [{
		name: {
			fr: "Décoration"
		},

		effect: {
			fr: "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Énergie Psychic, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Fouet G-Max"
		},

		effect: {
			fr: "Défaussez autant d’Énergies que vous voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon."
		},

		damage: "60×",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3
}

export default card