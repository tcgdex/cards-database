import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'es-es': "Pyroar",
		'it-it': "Pyroar",
		'pt-br': "Pyroar",
		'de-de': "Pyroleo"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flare Command",
				'fr-fr': "Ordre Flamboyant",
				'es-es': "Orden Destellante",
				'it-it': "Pirocomando",
				'pt-br': "Comando de Chamas",
				'de-de': "Bengalo-Kontrolle"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Fire Energy attached to this Pokémon. If you do, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 Energía Fire unida a este Pokémon. Si lo haces, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare un'Energia Fire assegnata a questo Pokémon. Se lo fai, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá descartar uma Energia Fire ligada a este Pokémon. Se você fizer isso, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel legen. Wenn du das machst, tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Inferno Onrush",
				'fr-fr': "Torrent d'Enfer",
				'es-es': "Infierno Desatado",
				'it-it': "Assalto Infernale",
				'pt-br': "Investida Infernal",
				'de-de': "Inferno-Ansturm"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Esse Pokémon causa 30 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The male with the largest mane of fire is the leader of the pride.",
	},

	thirdParty: {
		cardmarket: 281814,
		tcgplayer: 94145
	}
}

export default card
