import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Mandibuzz",
		'fr-fr': "Vaututrice",
		'es-es': "Mandibuzz",
		'it-it': "Mandibuzz",
		'pt-br': "Mandibuzz",
		'de-de': "Grypheldis"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		630,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Trash Crash",
				'fr-fr': "Déchets Déchus",
				'es-es': "Choque Basura",
				'it-it': "Lancio Rifiuti",
				'pt-br': "Arremesso de Lixo",
				'de-de': "Plunderfall"
			},
			effect: {
				'en-us': "Discard an Item card from your hand. If you do, this attack does 60 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Défaussez une carte Objet de votre main. Dans ce cas, cette attaque inflige 60 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Descarta 1 carta de Objeto de tu mano. Si lo haces, este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Scarta una carta Strumento dalla tua mano. Se lo fai, questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Descarte 1 carta de Item da sua mão. Se fizer isto, este ataque causará 60 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
				'de-de': "Lege 1 Itemkarte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, fügt diese Attacke 1 Pokémon deines Gegners 60 Schadenspunkte zu. Dieser Schaden wird durch Schwäche und Resistenz nicht verändert."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brave Bird",
				'fr-fr': "Rapace",
				'es-es': "Pájaro Osado",
				'it-it': "Baldeali",
				'pt-br': "Pássaro Bravo",
				'de-de': "Sturzflug"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

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

	retreat: 2,

	description: {
		'en-us': "It circles in the sky, keeping a keen eye out for Pokémon in a weakened state. Its choicest food is Cubone.",
	},

	thirdParty: {
		cardmarket: 369023,
		tcgplayer: 183871
	}
}

export default card
