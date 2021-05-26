import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wimessir V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Veille"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif."
		}
	}],

	attacks: [{
		name: {
			fr: "Psyko"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		},

		damage: "10+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card