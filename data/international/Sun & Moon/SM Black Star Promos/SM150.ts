import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Raikou",
		'fr-fr': "Raikou",
		'es-es': "Raikou",
		'it-it': "Raikou",
		'pt-br': "Raikou",
		'de-de': "Raikou"
	},
	illustrator: "nagimiso",
	rarity: "Promo",
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
				'en-us': "Lost Voltage",
				'fr-fr': "Tension Perdue",
				'es-es': "Voltaje Perdido",
				'it-it': "Voltaggio Perduto",
				'pt-br': "Voltagem Perdida",
				'de-de': "Nirgendwo-Funke"
			},
			effect: {
				'en-us': "If you have any Lightning Energy cards in the Lost Zone, this attack does 90 more damage.",
				'fr-fr': "Si vous avez au moins une carte Énergie Lightning dans la Zone Perdue, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si tienes alguna carta de Energía Lightning en la Zona Perdida, este ataque hace 90 puntos de daño más.",
				'it-it': "Se hai delle carte Energia Lightning nell’area perduta, questo attacco infligge 90 danni in più.",
				'pt-br': "Se você tiver alguma carta de Energia Lightning na Zona Perdida, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn du mindestens 1 Lightning-Energiekarte im Nirgendwo hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
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




	description: {
		'en-us': "This rough Pokémon stores energy inside its body, then sweeps across the land, shooting off electricity.",
	},
}

export default card
