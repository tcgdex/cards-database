import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
		'es-es': "Goomy",
		'it-it': "Goomy",
		'pt-br': "Goomy",
		'de-de': "Viscora"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		704,
	],

	hp: 40,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Water Down",
				'fr-fr': "Dilution",
				'es-es': "Aguar",
				'it-it': "Idrodiluente",
				'pt-br': "Diluir",
				'de-de': "Panschen"
			},
			effect: {
				'en-us': "Whenever you attach a Water Energy card from your hand to this Pokémon, you may search your deck for Goomy and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon, vous pouvez chercher Mucuscule dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Cada vez que unas 1 carta de Energía Water de tu mano a este Pokémon, puedes buscar en tu baraja a Goomy y ponerlo en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Ogni volta che assegni una carta Energia Water a questo Pokémon dalla tua mano, puoi cercare nel tuo mazzo un Goomy e aggiungerlo alla tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Sempre que ligar um card de Energia Water da sua mão a este Pokémon, você pode procurar Goomy em seu baralho e colocá-lo no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Immer wenn du 1 Water-Energiekarte von deiner Hand an dieses Pokémon anlegst, kannst du dein Deck nach Viscora durchsuchen und es auf deine Bank legen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Ruée",
				'es-es': "Estampida",
				'it-it': "Fuggi Fuggi",
				'pt-br': "Estouro",
				'de-de': "Zertrampeln"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's covered in a slimy membrane that makes any punches or kicks slide off it harmlessly.",
	},

	thirdParty: {
		cardmarket: 284239,
		tcgplayer: 101480
	}
}

export default card
