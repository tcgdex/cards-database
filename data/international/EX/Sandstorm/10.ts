import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Tenefix",
		'de-de': "Zobiris"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [302],

	hp: 60,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supernatural",
				'fr-fr': "Surnaturel",
				'de-de': "Supernatural"
			},
			effect: {
				'en-us': "Look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this attack. (The Supporter card remains in your opponent's hand.)",
				'fr-fr': "Regardez la main de votre adversaire. Vous pouvez utiliser l'effet d'une carte Supporter pour cette attaque. (Votre adversaire garde la carte Supporter en main).",
				'de-de': "Look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this attack. (The Supporter card remains in your opponent's hand.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Bind",
				'fr-fr': "Sombre étreinte",
				'de-de': "Dark Bind"
			},
			effect: {
				'en-us': "You may discard a Darkness Energy card attached to Sableye. If you do, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Vous pouvez défausser une carte Énergie  attachée à Tenefix. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "You may discard a  Energy card attached to Sableye. If you do, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

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
				cardmarket: 275787,
				tcgplayer: 88847
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275787,
				tcgplayer: 88847
			}
		},
	],

}

export default card
