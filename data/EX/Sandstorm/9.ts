import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule",
		de: "Flunkifer"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scam",
				fr: "Arnaque",
				de: "Scam"
			},
			effect: {
				en: "Look at your opponent's hand. You may have your opponent shuffle a Supporter card you find there into his or her deck. If you do, your opponent draws a card.",
				fr: "Regardez la main de votre adversaire. Si vous y trouvez une carte Supporter, vous pouvez demander à votre adversaire de la mélanger de nouveau à son deck. Dans ce cas, votre adversaire pioche une carte.",
				de: "Look at your opponent's hand. You may have your opponent shuffle a Supporter card you find there into his or her deck. If you do, your opponent draws a card."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Hook",
				fr: "Crochet métallique",
				de: "Metal Hook"
			},
			effect: {
				en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, vous pouvez échanger un des Pokémon Défenseur de votre adversaire contre un des Pokémon de son Banc. Dans ce cas, cette attaque inflige 20 dégâts au nouveau Pokémon Défenseurs.",
				de: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275786,
		tcgplayer: 87257
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
