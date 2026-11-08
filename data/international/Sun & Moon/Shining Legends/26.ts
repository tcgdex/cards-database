import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Keldeo",
		'fr-fr': "Keldeo",
		'es-es': "Keldeo",
		'it-it': "Keldeo",
		'pt-br': "Keldeo",
		'de-de': "Keldeo"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		647,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bail Out",
				'fr-fr': "Renflouage",
				'es-es': "Sacar de Apuros",
				'it-it': "Soccorso",
				'pt-br': "Salvamento",
				'de-de': "Freilassen"
			},
			effect: {
				'en-us': "Put a Water Pokémon from your discard pile into your hand.",
				'fr-fr': "Ajoutez un Pokémon Water de votre pile de défausse à votre main.",
				'es-es': "Pon 1 Pokémon Water de tu pila de descartes en tu mano.",
				'it-it': "Prendi un Pokémon Water dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
				'pt-br': "Coloque 1 Pokémon Water da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Water-Pokémon aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Resolute Blade",
				'fr-fr': "Lame Décidée",
				'es-es': "Cuchilla Resuelta",
				'it-it': "Lama Risoluta",
				'pt-br': "Lâmina Resoluta",
				'de-de': "Resolute Klinge"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each of your opponent’s Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It crosses the world, running over the surfaces of oceans and rivers. It appears at scenic waterfronts.",
	},

	thirdParty: {
		cardmarket: 302164,
		tcgplayer: 146680
	}
}

export default card
