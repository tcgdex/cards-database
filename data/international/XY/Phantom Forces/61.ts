import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Metal Links",
				'fr-fr': "Liens Métalliques",
				'es-es': "Eslabón Metálico",
				'it-it': "Anelli Metallici",
				'pt-br': "Elos de Metal",
				'de-de': "Metallbündnis"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Metal Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Metal de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Metal de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Metal dalla tua pila degli scarti.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Metal da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Metal-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 60,

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

	retreat: 3,

	description: {
		'en-us': "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
	},

	thirdParty: {
		cardmarket: 281867,
		tcgplayer: 94629
	}
}

export default card
