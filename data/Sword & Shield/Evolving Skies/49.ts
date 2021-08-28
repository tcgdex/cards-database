import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "chibi",

	attacks: [{
		name: {
			en: "Energize",
			fr: "Énergisant",
			es: "Vigorizar",
			it: "Energizza",
			pt: "Energize",
			de: "Energiezufuhr"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía Lightning de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia Lightning dalla tua pila degli scarti.",
			pt: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			de: "Lege 1 Lightning-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Electro Ball",
			de: "Elektroball"
		},

		damage: 30,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card