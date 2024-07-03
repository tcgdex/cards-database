import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [358],
	set: Set,

	name: {
		en: "Chimecho",
		fr: "Éoko",
		es: "Chimecho",
		it: "Chimecho",
		pt: "Chimecho",
		de: "Palimpalim"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
			es: "Vozarrón",
			it: "Granvoce",
			pt: "Hipervoz",
			de: "Schallwelle"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Homeward Chime",
			fr: "Carillon de Rentrée",
			es: "Campanas de Bienvenida",
			it: "Tintinnio Familiare",
			pt: "Sino de Boas-vindas",
			de: "Heimklang"
		},

		effect: {
			en: "Shuffle 1 of your Benched Pokémon and all attached cards into your deck.",
			fr: "Mélangez avec votre deck l'un de vos Pokémon de Banc et toutes les cartes qui lui sont attachées.",
			es: "Pon 1 de tus Pokémon en Banca y todas las cartas unidas a él en tu baraja, y barájalas todas.",
			it: "Rimischia uno dei tuoi Pokémon in panchina e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "Embaralhe 1 dos seus Pokémon no Banco e todas as cartas ligadas a ele no seu baralho.",
			de: "Mische 1 Pokémon auf deiner Bank und alle angelegten Karten in dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card