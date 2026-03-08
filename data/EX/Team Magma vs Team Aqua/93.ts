import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Sceptile ex",
		fr: "Jungko ex",
		de: "Gewaldro ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 150,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Green Heal",
				fr: "Guérison verte",
				de: "Green Heal"
			},
			effect: {
				en: "Remove 4 damage counters from each of your Pokémon that has Grass Energy attached. If that Pokémon has less than 4 damage counters, remove all of them.",
				fr: "Retirez 4 marqueurs de dégât à chacun de vos Pokémon possédant une Énergie . Si ces Pokémon possèdent moins de 4 marqueurs de dégât, retirez-les tous.",
				de: "Remove 4 damage counters from each of your Pokémon that has  Energy attached. If that Pokémon has less than 4 damage counters, remove all of them."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
				fr: "Anneau de poison",
				de: "Poison Ring"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Il ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire.",
				de: "The Defending Pokémon is now Poisoned. The defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup déchirant",
				de: "Slashing Strike"
			},
			effect: {
				en: "Sceptile ex can't use Slashing Strike during your next turn.",
				fr: "Jungko ex ne peut pas utiliser Coup déchirant lors de votre prochain tour.",
				de: "Sceptile ex can't use Slashing strike during your next turn."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276070,
		tcgplayer: 88954
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
