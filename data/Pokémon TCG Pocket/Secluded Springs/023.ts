import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Mantyke",
		fr: "Babimanta"
	},

	illustrator: "Shibuzoh.",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [458],
	hp: 30,
	types: ["Water"],

	description: {
		en: "It's highly friendly and easily tamed. Tours that\ntake people swimming with Mantyke are a\nsuper-popular beach activity.",
		fr: "Il est très affectueux et adore les humains. Les excursions permettant d'aller nager avec lui sont très populaires auprès des touristes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Splashy Toss",
			fr: "Lancer qui Éclabousse"
		},

		effect: {
			en: "Take a {W} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon.",
			fr: "Prenez une Énergie {W} de votre zone Énergie et attachez-la à un de vos Pokémon de base de Banc."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card