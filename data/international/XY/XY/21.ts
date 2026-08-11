import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'es-es': "Magcargo",
		'it-it': "Magcargo",
		'pt-br': "Magcargo",
		'de-de': "Magcargo"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Magma Mantle",
				'fr-fr': "Manteau de Magma",
				'es-es': "Manto Magma",
				'it-it': "Magmamanto",
				'pt-br': "Manto de Magma",
				'de-de': "Magmahülle"
			},
			effect: {
				'en-us': "You may discard the top card of your deck. If that card is a Fire Energy card, this attack does 50 more damage.",
				'fr-fr': "Vous pouvez défausser la carte du dessus de votre deck. Si cette carte est une carte Énergie Fire, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Puedes descartar la primera carta de tu baraja. Si es una carta de Energía Fire, este ataque hace 50 puntos de daño más.",
				'it-it': "Puoi scartare la carta in cima al tuo mazzo. Se è una carta Energia Fire, questo attacco infligge 50 danni in più.",
				'pt-br': "Você pode descartar o card do topo do seu baralho. Se esse card for um card de Energia Fire, esse ataque causará 50 de danos adicionais.",
				'de-de': "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Falls es eine Fire-Energiekarte ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its brittle shell occasionally spouts intense flames that circulate throughout its body.",
	},

	thirdParty: {
		cardmarket: 281358,
		tcgplayer: 87018
	}
}

export default card
