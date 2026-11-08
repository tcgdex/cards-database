import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gothic Fear",
				'fr-fr': "Peur Gothique",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may leave both Active Pokémon Confused.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez laisser les deux Pokémon Actifs Confus.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Ring",
				'fr-fr': "Anneau de Poison",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. That Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It licks with its gaseous tongue to steal the victim's life force. It lurks in darkness for prey.",
	},

	thirdParty: {
		cardmarket: 288472,
		tcgplayer: 113692
	}
}

export default card
