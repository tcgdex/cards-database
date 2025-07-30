import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
		de: "Voltenso"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-éclair",
				de: "Donnerwelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Volt Crush",
				fr: "Écras'volt",
				de: "Volt-Zermalmer"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to Manectric and this attack does 40 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à Elecsprint et cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei 'Kopf' lege 1 Energie, die an Voltenso angelegt ist, auf deinen Ablagestapel und dieser Angriff fügt 40 Schadenpunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278089,
		tcgplayer: 87161
	}
}

export default card
