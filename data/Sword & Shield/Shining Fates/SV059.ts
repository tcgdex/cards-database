import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wimessir",
		en: "Indeedee"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Gain de Temps",
			en: "Replenish Time"
		},

		effect: {
			fr: "Soignez 30 dégâts de chacun de vos Pokémon.",
			en: "Heal 30 damage from each of your Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Rafale Psy",
			en: "Psybeam"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent’s Active Pokémon is now Confused."
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