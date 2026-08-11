import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Sawsbuck",
		'fr-fr': "Haydaim",
		'es-es': "Sawsbuck",
		'it-it': "Sawsbuck",
		'pt-br': "Sawsbuck",
		'de-de': "Kronjuwild"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		586,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Seasonal Blessings",
				'fr-fr': "Vœux de Saison",
				'es-es': "Bendiciones Estacionales",
				'it-it': "Preghiera Stagionale",
				'pt-br': "Bênçãos Sazonais",
				'de-de': "Segen der Jahreszeit"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw a card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar 1 carta.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar 1 carta.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Bounce",
				'fr-fr': "Rebond",
				'es-es': "Bote",
				'it-it': "Rimbalzo",
				'pt-br': "Ricochete",
				'de-de': "Sprungfeder"
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
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

	retreat: 2,

	description: {
		'en-us': "They migrate according to the seasons. People can tell the season by looking at Sawsbuck's horns.",
	},

	thirdParty: {
		cardmarket: 407734,
		tcgplayer: 201925
	}
}

export default card
