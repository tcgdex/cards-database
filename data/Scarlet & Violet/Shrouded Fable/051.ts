import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [676],
	set: Set,

	name: {
		en: "Furfrou",
		fr: "Couafarel",
		es: "Furfrou",
		it: "Furfrou",
		pt: "Furfrou",
		de: "Coiffwaff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energy Assist",
			fr: "Assistance Énergétique",
			es: "Asistencia de Energía",
			it: "Assistienergia",
			pt: "Socorro de Energia",
			de: "Energieförderung"
		},

		effect: {
			en: "Attach a Basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			es: "Une 1 carta de Energía Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shinya Komatsu"
}

export default card
