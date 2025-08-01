import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
		es: "Granbull",
		it: "Granbull",
		pt: "Granbull",
		de: "Granbull"
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
		en: "Snubbull",
		fr: "Snubbull",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "All Out",
				fr: "À Fond",
				es: "A por Todas",
				it: "A Tutta Forza",
				pt: "Esgotado",
				de: "Aufs Ganze gehen"
			},
			effect: {
				en: "If you have no cards in your hand, this attack does 130 more damage.",
				fr: "Si vous n’avez aucune carte dans votre main, cette attaque inflige 130 dégâts supplémentaires.",
				es: "Si no tienes ninguna carta en tu mano, este ataque hace 130 puntos de daño más.",
				it: "Se non hai carte in mano, questo attacco infligge 130 danni in più.",
				pt: "Se você não tiver cartas na sua mão, este ataque causará 130 pontos de dano a mais.",
				de: "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 130 Schadenspunkte mehr zu."
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
				en: "Giant Fangs",
				fr: "Crocs Géants",
				es: "Colmillos Gigantes",
				it: "Zanne Giganti",
				pt: "Presas Gigantes",
				de: "Riesenbeißer"
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

	thirdParty: {
		cardmarket: 365775
	}
}

export default card
