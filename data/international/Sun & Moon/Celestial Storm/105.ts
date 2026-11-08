import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'es-es': "Shelgon",
		'it-it': "Shelgon",
		'pt-br': "Shelgon",
		'de-de': "Draschel"
	},

	illustrator: "Asako Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 90,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				'en-us': "Raging Blade",
				'fr-fr': "Lame en Furie",
				'es-es': "Tajo Furioso",
				'it-it': "Lama Furente",
				'pt-br': "Lâmina Devastadora",
				'de-de': "Wutklinge"
			},
			effect: {
				'en-us': "If this Pokémon has any damage counters on it, this attack does 50 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 50 puntos de daño más.",
				'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 50 danni in più.",
				'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "They lurk deep within caves—motionless, neither eating nor drinking. Why they don't die is not known.",
	},

	thirdParty: {
		cardmarket: 361346,
		tcgplayer: 170932
	}
}

export default card
