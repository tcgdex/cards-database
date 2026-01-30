import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Manectric ex",
		fr: "Elecsprint ex",
		de: "Voltenso ex"
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
		en: "Electrike",
		fr: "Dynavolt"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Disconnect",
				fr: "Déconnecter",
				de: "Disconnect"
			},
			effect: {
				en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Dresseur de sa main (cartes Supporter exclues) lors de son prochain tour.",
				de: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn."
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
				en: "Mega Shot",
				fr: "Mega coup",
				de: "Mega Shot"
			},
			effect: {
				en: "Discard all Lightning Energy attached to Manectric ex and then choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toutes les Énergies  attachées à Elecsprint ex puis choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Discard all  Energy attached to Manectric ex and then choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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

	thirdParty: {
		tcgplayer: 87167,
		cardmarket: 276504
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
	]
}

export default card
