import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		it: "Drampa",
		pt: "Drampa",
		de: "Sen-Long"
	},

	illustrator: "Toshinao Aoki",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [780],

	hp: 120,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Dragon Pulse",
				fr: "Draco-Choc",
				es: "Pulso Dragón",
				it: "Dragopulsar",
				pt: "Pulso do Dragão",
				de: "Drachenpuls"
			},
			damage: 20,
			effect: {
				en: "Discard the top card of your deck.",
				fr: "Défaussez la carte du dessus de votre deck.",
				es: "Descarta la primera carta de tu baraja.",
				it: "Scarta la prima carta del tuo mazzo.",
				pt: "Descarte a carta de cima do seu baralho.",
				de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Power Cyclone",
				fr: "Cyclone de Puissance",
				es: "Ciclón de Poder",
				it: "Ciclone di Potenza",
				pt: "Ciclone de Poder",
				de: "Kraftzyklon"
			},
			damage: 80,
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
				es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta un'Energia da questo Pokémon a uno dei tuoi Pokémon in panchina.",
				pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

