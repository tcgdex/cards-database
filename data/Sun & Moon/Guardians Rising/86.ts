import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
		es: "Probopass",
		it: "Probopass",
		pt: "Probopass",
		de: "Voluminas"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		476,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Energy Link",
				fr: "Chaîne d’Énergie",
				es: "Vínculo de Energía",
				it: "Legame Energetico",
				pt: "Elo de Energia",
				de: "Energie-Verbindung"
			},
			effect: {
				en: "Attach an Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia da sua pilha de descarte a este Pokémon.",
				de: "Lege 1 Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
				es: "Joya de Luz",
				it: "Gemmoforza",
				pt: "Gema Poderosa",
				de: "Juwelenkraft"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 297542,
		tcgplayer: 131000
	}
}

export default card
