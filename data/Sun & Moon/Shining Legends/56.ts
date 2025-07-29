import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Rayquaza",
		fr: "Rayquaza Brillant",
		es: "Rayquaza Luminoso",
		it: "Rayquaza iridescente",
		pt: "Rayquaza Luminescente",
		de: "Schimmerndes Rayquaza"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
				es: "Pulso Dragón",
				it: "Dragopulsar",
				pt: "Pulso do Dragão",
				de: "Drachenpuls"
			},
			effect: {
				en: "Discard the top 2 cards of your deck.",
				fr: "Défaussez les 2 cartes du dessus de votre deck.",
				es: "Descarta las 2 primeras cartas de tu baraja.",
				it: "Scarta le prime due carte del tuo mazzo.",
				pt: "Descarte as 2 primeiras cartas do seu baralho.",
				de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Sky Judgment",
				fr: "Jugement Céleste",
				es: "Juicio Celeste",
				it: "Giudizio Celeste",
				pt: "Julgamento Celeste",
				de: "Himmelsurteil"
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 302193
	}
}

export default card
