import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		de: "Sonnfel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Solar Eclipse",
				fr: "Éclipse de soleil",
				de: "Solar Eclipse"
			},
			effect: {
				en: "Once during your turn (before your attack), if Lunatone is in play, you may use this power. Until the end of your turn, Solrock's type is Fire. This power can't be used if Solrock is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Seleroc est en jeu, vous pouvez utiliser ce pouvoir. Jusqu'à la fin du tour, Solaroc est . Ce pouvoir ne peut pas être utilisé si Solaroc est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), if Lunatone is in play, you may use this power. Until the end of your turn, Solrock's type is . This power can't be used if Solrock is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cosmic Draw",
				fr: "Pioche cosmik",
				de: "Cosmic Draw"
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, draw 3 cards.",
				fr: "Si votre adversaire a un Pokémon Évolué en jeu, piochez trois cartes.",
				de: "If your opponent has any Evolved Pokémon in play, draw 3 cards."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Blast",
				fr: "Explosion solaire",
				de: "Solar Blast"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275790,
		tcgplayer: 89425
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
