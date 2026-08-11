import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Giratina",
		'fr-fr': "Giratina",
		'de-de': "Giratina"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [487],

	hp: 100,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Strafe",
				'fr-fr': "Bombarder",
				'de-de': "Strafe"
			},
			effect: {
				'en-us': "You may switch Giratina with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Giratina avec 1 de vos Pokémon de Banc.",
				'de-de': "You may switch Giratina with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Broken-space Blow",
				'fr-fr': "Coup espace-brisé",
				'de-de': "Broken-space Blow"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Knocked Out by this attack, put the Defending Pokémon and all cards attached to in the Lost Zone instead of the discard pile.",
				'fr-fr': "Si le Pokémon Défenseur est mis K.O par cette attaque, placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de les défausser.",
				'de-de': "If the Defending Pokémon is Knocked Out by this attack, put the Defending Pokémon and all cards attached to it in the Lost Zone instead of discarding them."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "A Pokémon that is said to live in a world on the reverse side of ours. It appears in an ancient cemetery."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85735,
				cardmarket: 278430
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278430,
				tcgplayer: 85735
			}
		}
	],

}

export default card
