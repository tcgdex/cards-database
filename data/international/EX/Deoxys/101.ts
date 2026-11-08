import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Manectric ex",
		'fr-fr': "Elecsprint ex",
		'de-de': "Voltenso ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Disconnect",
				'fr-fr': "Déconnecter",
				'de-de': "Disconnect"
			},
			effect: {
				'en-us': "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Dresseur de sa main (cartes Supporter exclues) lors de son prochain tour.",
				'de-de': "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn."
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Mega Shot",
				'fr-fr': "Mega coup",
				'de-de': "Mega Shot"
			},
			effect: {
				'en-us': "Discard all Lightning Energy attached to Manectric ex and then choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez toutes les Énergies  attachées à Elecsprint ex puis choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Discard all  Energy attached to Manectric ex and then choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

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
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87167,
				cardmarket: 276504
			},
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"],
			thirdParty: {
				tcgplayer: 87167,
				cardmarket: 276504
			},
		},
	],

}

export default card
