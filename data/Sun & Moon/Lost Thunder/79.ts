import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
		es: "Raikou",
		it: "Raikou",
		pt: "Raikou",
		de: "Raikou"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lost Voltage",
				fr: "Tension Perdue",
				es: "Voltaje Perdido",
				it: "Voltaggio Perduto",
				pt: "Voltagem Perdida",
				de: "Nirgendwo-Funke"
			},
			effect: {
				en: "If you have any Lightning Energy cards in the Lost Zone, this attack does 90 more damage.",
				fr: "Si vous avez au moins une carte Énergie Lightning dans la Zone Perdue, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si tienes alguna carta de Energía Lightning en la Zona Perdida, este ataque hace 90 puntos de daño más.",
				it: "Se hai delle carte Energia Lightning nell’area perduta, questo attacco infligge 90 danni in più.",
				pt: "Se você tiver alguma carta de Energia Lightning na Zona Perdida, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du mindestens 1 Lightning-Energiekarte im Nirgendwo hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

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

	retreat: 2,

	thirdParty: {
		cardmarket: 365717
	}
}

export default card
