import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson",
		'es-es': "Quilava",
		'it-it': "Quilava",
		'pt-br': "Quilava",
		'de-de': "Igelavar"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre",
		'es-es': "Cyndaquil",
		'it-it': "Cyndaquil",
		'pt-br': "Cyndaquil",
		'de-de': "Feurigel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Mini Eruption",
				'fr-fr': "Mini-Éruption",
				'es-es': "Miniestallido",
				'it-it': "Minieruzione",
				'pt-br': "Mini Erupção",
				'de-de': "Kleine Eruption"
			},
			effect: {
				'en-us': "Discard the top card of your deck. If that card is an Energy card, this attack does 30 more damage.",
				'fr-fr': "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Descarta la primera carta de tu baraja. Si es una carta de Energía, este ataque hace 30 puntos de daño más.",
				'it-it': "Scarta la prima carta del tuo mazzo. Se è una carta Energia, questo attacco infligge 30 danni in più.",
				'pt-br': "Descarte o card de cima do seu baralho. Se aquele card for um card de Energia, este ataque causará 30 de danos adicionais.",
				'de-de': "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Falls es eine Energiekarte ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Be careful if it turns its back during battle. It means that it will attack with the fire on its back.",
	},

	thirdParty: {
		cardmarket: 286265,
		tcgplayer: 107138
	}
}

export default card
