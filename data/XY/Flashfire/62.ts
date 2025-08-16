import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		669,
	],

	hp: 40,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Aromatherapy",
				fr: "Aromathérapie",
				es: "Aromaterapia",
				it: "Aromaterapia",
				pt: "Aromaterapia",
				de: "Aromakur"
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

	retreat: 1,

	thirdParty: {
		cardmarket: 281545
	}
}

export default card
