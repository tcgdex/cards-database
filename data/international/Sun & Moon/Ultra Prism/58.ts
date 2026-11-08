import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Giratina ◇",
		'fr-fr': "Giratina ◇",
		'es-es': "Giratina ◇",
		'it-it': "Giratina ◇",
		'pt-br': "Giratina ◇",
		'de-de': "Giratina ◇"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Chaotic Star",
				'fr-fr': "Étoile Chaotique",
				'es-es': "Estrella Caótica",
				'it-it': "Stella del Caos",
				'pt-br': "Estrela do Caos",
				'de-de': "Chaosstern"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach 2 Psychic Energy cards from your hand to it.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lui attacher 2 cartes Énergie Psychic de votre main.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes unirle 2 cartas de Energía Psychic de tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli due carte Energia Psychic dalla tua mano.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode ligar 2 cartas de Energia Psychic da sua mão a ele.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 2 Psychic-Energiekarten aus deiner Hand an es anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Crisis Dive",
				'fr-fr': "Plongeon Critique",
				'es-es': "Crisis en Picado",
				'it-it': "Picchiata Critica",
				'pt-br': "Mergulho de Calamidade",
				'de-de': "Krisensprung"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'fr-fr': "Plongeon Critique",
			},
			effect: {
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
	},

	thirdParty: {
		cardmarket: 315988
	}
}

export default card
