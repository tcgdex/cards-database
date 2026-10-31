import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Ash's Pikachu",
		fr: "Pikachu de Sacha",
		de: "Ashs Pikachu"
	},
	illustrator: "2017 Pikachu Project",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volt Tackle",
				fr: "Électacle",
				de: "Volttackle"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s’inflige 10 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 60,

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
	retreat: 1,




	description: {
		en: "This form of Pikachu is somewhat rare. It wears the hat of its Trainer, who is also its partner.",
		de: "Dieses Pikachu trägt die Kappe des Trainers, mit dem es sich zusammengeschlossen hat. Ein Anblick, den man nicht alle Tage sieht!"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 313438,
				tcgplayer: 153995
			}
		}
	],
}

export default card
