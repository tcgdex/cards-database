import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "M Ampharos EX",
		'fr-fr': "M-Pharamp EX",
		'es-es': "M-Ampharos EX",
		'it-it': "M Ampharos EX",
		'pt-br': "M-Ampharos EX",
		'de-de': "M-Ampharos EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 220,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Ampharos-EX",
		'fr-fr': "Pharamp-EX",
		'es-es': "Ampharos-EX",
		'it-it': "Ampharos-EX",
		'pt-br': "Ampharos-EX",
		'de-de': "Ampharos-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Exavolt",
				'fr-fr': "Exavolt",
				'es-es': "Exavoltio",
				'it-it': "Exavolt",
				'pt-br': "Exavolt",
				'de-de': "Exavolt"
			},
			effect: {
				'en-us': "You may do 50 more damage and leave your opponent's Active Pokémon Paralyzed. If you do, this Pokémon does 30 damage to itself.",
				'fr-fr': "Vous pouvez infliger 50 dégâts supplémentaires et laisser le Pokémon Actif de votre adversaire Paralysé. Dans ce cas, ce Pokémon s'inflige 30 dégâts.",
				'es-es': "Puedes hacer 50 puntos de daño más y dejar al Pokémon Activo de tu rival Paralizado. Si lo haces, este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Puoi infliggere 50 danni in più e lasciare il Pokémon attivo del tuo avversario paralizzato. Se lo fai, questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Você pode causar 50 de danos adicionais e deixar o Pokémon Ativo do seu oponente Paralisado. Se você fizer isso, o Pokémon causará 30 de danos a ele mesmo.",
				'de-de': "Du kannst mit diesem Angriff 50 weitere Schadenspunkte zufügen und das Aktive Pokémon deines Gegners paralysieren. Wenn du das machst, fügt dieses Pokémon sich selbst 30 Schadenspunkte zu."
			},
			damage: "120+",

		}
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

	retreat: 3,
	suffix: "EX",

	thirdParty: {
		cardmarket: 284209,
		tcgplayer: 101449
	}
}

export default card
