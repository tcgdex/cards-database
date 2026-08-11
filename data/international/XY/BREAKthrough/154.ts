import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "M Houndoom EX",
		fr: "M-Démolosse EX",
		es: "M-Houndoom EX",
		it: "M Houndoom EX",
		pt: "M-Houndoom EX",
		de: "M-Hundemon EX"
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
		en: "Houndoom-EX",
		fr: "Démolosse-EX",
		es: "Houndoom-EX",
		it: "Houndoom-EX",
		pt: "Houndoom-EX",
		de: "Hundemon-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Inferno Fang",
				fr: "Croc Infernal",
				es: "Colmillo Infernal",
				it: "Zanne Infernali",
				pt: "Presa do Inferno",
				de: "Inferno-Reißzahn"
			},
			effect: {
				en: "You may discard all Fire Energy attached to this Pokémon. If you do, this attack does 80 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies Fire attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Puedes descartar todas las Energías Fire unidas a este Pokémon. Si lo haces, este ataque hace 80 puntos de daño más.",
				it: "Puoi scartare tutte le Energie Fire assegnate a questo Pokémon. Se lo fai, questo attacco infligge 80 danni in più.",
				pt: "Você pode descartar toda a Energia Fire ligada a este Pokémon. Se fizer isso, este ataque causará 80 de danos adicionais.",
				de: "Du kannst alle an dieses Pokémon angelegten Fire-Energien auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 80 weitere Schadenspunkte zu."
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
