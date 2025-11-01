import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Pichu",
		fr: "Pichu"
	},

	illustrator: "Kanami Ogata",
	rarity: "One Star",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		en: "It is unskilled at storing electric power.\nAny kind of shock causes it to discharge\nenergy spontaneously.",
		fr: "Il ne sait pas encore bien emmagasiner l'électricité. Au moindre choc, il envoie des décharges sans le vouloir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Crackly Toss",
			fr: "Lancer qui Crépite"
		},

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon.",
			fr: "Prenez une Énergie {L} de votre zone Énergie et attachez-la à un de vos Pokémon de base de Banc."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["lugia"]
}

export default card