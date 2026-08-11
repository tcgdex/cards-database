import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Swellow",
		'fr-fr': "Hélédelle",
		'es-es': "Swellow",
		'it-it': "Swellow",
		'pt-br': "Swellow",
		'de-de': "Schwalboss"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'es-es': "Taillow",
		'it-it': "Taillow",
		'pt-br': "Taillow",
		'de-de': "Schwalbini"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Drive Off",
				'fr-fr': "Déroute",
				'es-es': "Huida",
				'it-it': "Filar Via",
				'pt-br': "Rechaçar",
				'de-de': "Wegtreiben"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá fazer com que seu oponente troque seu Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
				'es-es': "Ataque Ala",
				'it-it': "Attacco d'Ala",
				'pt-br': "Ataque de Asa",
				'de-de': "Flügelschlag"
			},

			damage: 60,

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
		'en-us': "If its two tail feathers are standing at attention, it is proof of good health. It soars elegantly in the sky.",
	},

	thirdParty: {
		cardmarket: 281440,
		tcgplayer: 89695
	}
}

export default card
