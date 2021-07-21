import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
		es: "Mandibuzz",
		it: "Mandibuzz",
		pt: "Mandibuzz",
		de: "Grypheldis"
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
		en: "Vullaby",
		fr: "Vostourno",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Trash Crash",
				fr: "Déchets Déchus",
				es: "Choque Basura",
				it: "Lancio Rifiuti",
				pt: "Arremesso de Lixo",
				de: "Plunderfall"
			},
			effect: {
				en: "Discard an Item card from your hand. If you do, this attack does 60 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness or Resistance.",
				fr: "Défaussez une carte Objet de votre main. Dans ce cas, cette attaque inflige 60 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "Descarta 1 carta de Objeto de tu mano. Si lo haces, este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
				it: "Scarta una carta Strumento dalla tua mano. Se lo fai, questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "Descarte 1 carta de Item da sua mão. Se fizer isto, este ataque causará 60 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
				de: "Lege 1 Itemkarte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, fügt diese Attacke 1 Pokémon deines Gegners 60 Schadenspunkte zu. Dieser Schaden wird durch Schwäche und Resistenz nicht verändert."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brave Bird",
				fr: "Rapace",
				es: "Pájaro Osado",
				it: "Baldeali",
				pt: "Pássaro Bravo",
				de: "Sturzflug"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
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



}

export default card
