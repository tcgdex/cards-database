import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Swift"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
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
				'en-us': "Mass Destruction",
				'fr-fr': "Grosse destruction",
				'de-de': "Mass Destruction"
			},
			effect: {
				'en-us': "Both Electrode and the Defending Pokémon are now Knocked Out. If Electrode has any Special Energy cards attached to it, this attack does nothing.",
				'fr-fr': "Electrode et le Pokémon Défenseur sont maintenant K.O. Si Electrode possède des cartes Énergie Spéciales, cette attaque est sans effet.",
				'de-de': "Both Electrode and the Defending Pokémon are now Knocked Out. If Electrode has any Special Energy cards attached to it, this attack does nothing."
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85153,
				cardmarket: 276079
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 85153,
				cardmarket: 276079
			}
		},
	]
}

export default card
