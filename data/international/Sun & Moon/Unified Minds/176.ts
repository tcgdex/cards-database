import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Unfezant",
		'fr-fr': "Déflaisan",
		'es-es': "Unfezant",
		'it-it': "Unfezant",
		'pt-br': "Unfezant",
		'de-de': "Fasasnob"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		521,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'es-es': "Tornado",
				'it-it': "Raffica",
				'pt-br': "Lufada de Vento",
				'de-de': "Windstoß"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Downburst",
				'fr-fr': "Rafale Descendante",
				'es-es': "Chaparrón",
				'it-it': "Raffica Discendente",
				'pt-br': "Vendaval de Cima",
				'de-de': "Fallböe"
			},
			effect: {
				'en-us': "You may have each player shuffle all cards attached to their Active Pokémon into their deck.",
				'fr-fr': "Vous pouvez demander à chaque joueur de mélanger toutes les cartes attachées à son Pokémon Actif avec son deck.",
				'es-es': "Puedes hacer que cada jugador ponga todas las cartas unidas a su Pokémon Activo en su baraja y baraje todas las cartas.",
				'it-it': "Puoi far rimischiare a ciascun giocatore tutte le carte assegnate al suo Pokémon attivo nel suo mazzo.",
				'pt-br': "Você pode fazer com que cada jogador embaralhe todas as cartas ligadas ao próprio Pokémon Ativo no próprio baralho.",
				'de-de': "Du kannst beide Spieler veranlassen, alle an ihr Aktives Pokémon angelegten Karten in ihr Deck zu mischen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Males swing their head plumage to threaten opponents. The females' flying abilities surpass those of the males.",
	},

	thirdParty: {
		cardmarket: 388667,
		tcgplayer: 195176
	}
}

export default card
