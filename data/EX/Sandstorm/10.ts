import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Tenefix",
		de: "Zobiris"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supernatural",
				fr: "Surnaturel",
				de: "Supernatural"
			},
			effect: {
				en: "Look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this attack. (The Supporter card remains in your opponent's hand.)",
				fr: "Regardez la main de votre adversaire. Vous pouvez utiliser l'effet d'une carte Supporter pour cette attaque. (Votre adversaire garde la carte Supporter en main).",
				de: "Look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this attack. (The Supporter card remains in your opponent's hand.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Bind",
				fr: "Sombre étreinte",
				de: "Dark Bind"
			},
			effect: {
				en: "You may discard a Darkness Energy card attached to Sableye. If you do, the Defending Pokémon is now Paralyzed.",
				fr: "Vous pouvez défausser une carte Énergie  attachée à Tenefix. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé.",
				de: "You may discard a  Energy card attached to Sableye. If you do, the Defending Pokémon is now Paralyzed."
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

	thirdParty: {
		cardmarket: 275787,
		tcgplayer: 88847
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
