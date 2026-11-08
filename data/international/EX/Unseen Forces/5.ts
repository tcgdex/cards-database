import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'de-de': "Flamara"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fire Dance",
				'fr-fr': "Danse du feu",
				'de-de': "Fire Dance"
			},
			effect: {
				'en-us': "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie  et attachez-la à un 1 de vos Pokémon.",
				'de-de': "Search your discard pile for a  Energy card and attach it to 1 of your Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Multi Burn",
				'fr-fr': "Brûlures multiples",
				'de-de': "Multi Burn"
			},
			effect: {
				'en-us': "If Flareon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
				'fr-fr': "Si Pyroli possède au moins 3 types de cartes Énergie de base différents, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "If Flareon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85494,
				cardmarket: 276651
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85494,
				cardmarket: 276651
			},
		}
	],
}

export default card
