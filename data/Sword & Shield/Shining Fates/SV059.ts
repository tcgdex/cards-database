import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wimessir"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Gain de Temps"
		},

		effect: {
			fr: "Soignez 30 dégâts de chacun de vos Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Rafale Psy"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card