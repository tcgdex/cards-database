import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Electrode",
		de: "Lektrobal"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				de: "Swift"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mass Destruction",
				fr: "Grosse destruction",
				de: "Mass Destruction"
			},
			effect: {
				en: "Both Electrode and the Defending Pokémon are now Knocked Out. If Electrode has any Special Energy cards attached to it, this attack does nothing.",
				fr: "Electrode et le Pokémon Défenseur sont maintenant K.O. Si Electrode possède des cartes Énergie Spéciales, cette attaque est sans effet.",
				de: "Both Electrode and the Defending Pokémon are now Knocked Out. If Electrode has any Special Energy cards attached to it, this attack does nothing."
			},

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
		cardmarket: 276079,
		tcgplayer: 85153
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
