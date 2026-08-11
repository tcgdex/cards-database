import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Crawdaunt",
		'fr-fr': "Colhomard de Team Aqua",
		'de-de': "Team Aquas Krebutack"
	},

	illustrator: "Nakaoka",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [342],

	hp: 80,

	types: [
		"Water",
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Reverse",
				'fr-fr': "Aqua-revers",
				'de-de': "Aqua Reverse"
			},
			effect: {
				'en-us': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has Team Magma in its name and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire dont le nom comporte Team Aqua et l'échanger avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				'de-de': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has Team Magma in its name and switch it with 1 of the Defending Pokémon. Your opponent chooses which Defending Pokémon to switch."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Deep Impact",
				'fr-fr': "Grosse collision",
				'de-de': "Deep Impact"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Paralysé.",
				'de-de': "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275779,
				tcgplayer: 89783
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275779,
				tcgplayer: 89783
			}
		},
	],

}

export default card
