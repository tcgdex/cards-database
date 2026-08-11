import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'es-es': "Granbull",
		'it-it': "Granbull",
		'pt-br': "Granbull",
		'de-de': "Granbull"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		210,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "All Out",
				'fr-fr': "À Fond",
				'es-es': "A por Todas",
				'it-it': "A Tutta Forza",
				'pt-br': "Esgotado",
				'de-de': "Aufs Ganze gehen"
			},
			effect: {
				'en-us': "If you have no cards in your hand, this attack does 130 more damage.",
				'fr-fr': "Si vous n’avez aucune carte dans votre main, cette attaque inflige 130 dégâts supplémentaires.",
				'es-es': "Si no tienes ninguna carta en tu mano, este ataque hace 130 puntos de daño más.",
				'it-it': "Se non hai carte in mano, questo attacco infligge 130 danni in più.",
				'pt-br': "Se você não tiver cartas na sua mão, este ataque causará 130 pontos de dano a mais.",
				'de-de': "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 130 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Giant Fangs",
				'fr-fr': "Crocs Géants",
				'es-es': "Colmillos Gigantes",
				'it-it': "Zanne Giganti",
				'pt-br': "Presas Gigantes",
				'de-de': "Riesenbeißer"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "More timid than Snubbull, this Pokémon is doted on by young people amused at the contrast between its looks and its attitude.",
	},

	thirdParty: {
		cardmarket: 365775,
		tcgplayer: 178957
	}
}

export default card
