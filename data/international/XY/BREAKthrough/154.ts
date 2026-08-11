import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "M Houndoom EX",
		'fr-fr': "M-Démolosse EX",
		'es-es': "M-Houndoom EX",
		'it-it': "M Houndoom EX",
		'pt-br': "M-Houndoom EX",
		'de-de': "M-Hundemon EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 210,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Houndoom-EX",
		'fr-fr': "Démolosse-EX",
		'es-es': "Houndoom-EX",
		'it-it': "Houndoom-EX",
		'pt-br': "Houndoom-EX",
		'de-de': "Hundemon-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Inferno Fang",
				'fr-fr': "Croc Infernal",
				'es-es': "Colmillo Infernal",
				'it-it': "Zanne Infernali",
				'pt-br': "Presa do Inferno",
				'de-de': "Inferno-Reißzahn"
			},
			effect: {
				'en-us': "You may discard all Fire Energy attached to this Pokémon. If you do, this attack does 80 more damage.",
				'fr-fr': "Vous pouvez défausser toutes les Énergies Fire attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Puedes descartar todas las Energías Fire unidas a este Pokémon. Si lo haces, este ataque hace 80 puntos de daño más.",
				'it-it': "Puoi scartare tutte le Energie Fire assegnate a questo Pokémon. Se lo fai, questo attacco infligge 80 danni in più.",
				'pt-br': "Você pode descartar toda a Energia Fire ligada a este Pokémon. Se fizer isso, este ataque causará 80 de danos adicionais.",
				'de-de': "Du kannst alle an dieses Pokémon angelegten Fire-Energien auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 107273
	}
}

export default card
