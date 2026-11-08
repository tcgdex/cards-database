import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Cradily",
		'fr-fr': "Vacilys",
		'de-de': "Wielie"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [346],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Lileep",
		'fr-fr': "Lilia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Super Suction Cups",
				'fr-fr': "Super ventouses",
				'de-de': "Super Suction Cups"
			},
			effect: {
				'en-us': "As long as Cradily is your Active Pokémon, your opponent's Pokémon can't retreat.",
				'fr-fr': "Tant que Vacilys est votre Pokémon Actif, le Pokémon de votre adversaire ne peut pas battre en retraite.",
				'de-de': "As long as Cradily is your Active Pokémon, your opponent's Pokémon can't retreat."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lure Poison",
				'fr-fr': "Poison attractif",
				'de-de': "Lure Poison"
			},
			effect: {
				'en-us': "Before using this effect, you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon, if any. The Defending Pokémon is now Poisoned.",
				'fr-fr': "Avant d'utiliser cet effet, vous pouvez échanger le Pokémon Défenseur contre un des Pokémon du Banc de votre adversaire, s'il en a. Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Before using this effect, you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon, if any. The Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale",
				'de-de': "Spiral Drain"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Cradily (remove 1 if there is only 1).",
				'fr-fr': "Retirez à Vacilys deux marqueurs de dégât (ou un s'il n'en a qu'un).",
				'de-de': "Remove 2 damage counters from Cradily (remove 1 if there is only 1)."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275780,
				tcgplayer: 84451
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275780,
				tcgplayer: 84451
			}
		},
	],

}

export default card
