import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		300,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heal Bell",
				fr: "Glas de Soin",
				es: "Campana Cura",
				it: "Rintoccasana",
				pt: "Sino da Cura",
				de: "Vitalglocke"
			},
			effect: {
				en: "Heal 10 damage from each of your Pokémon.",
				fr: "Soignez 10 dégâts à chacun de vos Pokémon.",
				es: "Cura 10 puntos de daño a cada uno de tus Pokémon.",
				it: "Cura ciascuno dei tuoi Pokémon da 10 danni.",
				pt: "Cure 10 de danos de cada um dos seus Pokémon.",
				de: "Heile 10 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
				es: "Coletón",
				it: "Codabotta",
				pt: "Surra de Cauda",
				de: "Schweifvertrimmer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281441
	}
}

export default card
