import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Fourbelin",
		en: "Morgrem"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Grimalin",
		en: "Impidimp"
	},

	attacks: [{
		name: {
			fr: "Morsure",
			en: "Bite"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Fourbette",
			en: "False Surrender"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon."
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card