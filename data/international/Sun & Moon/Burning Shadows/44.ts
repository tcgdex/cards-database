import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		602,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Aqua Shock",
				'fr-fr': "Choc Aquatique",
				'es-es': "Sacudida Acuática",
				'it-it': "Idroshock",
				'pt-br': "Choque Aguado",
				'de-de': "Aquaschock"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon has any Water Energy attached to it, this attack does 30 more damage.",
				'fr-fr': "Si de l’Énergie Water est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival tiene alguna Energía Water unida a él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha delle Energie Water assegnate, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente possuir alguma Energia Water ligada a ele, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Water-Energie angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "While one alone doesn't have much power, a chain of many Tynamo can be as powerful as lightning.",
	},

	thirdParty: {
		cardmarket: 299448,
		tcgplayer: 138526
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
