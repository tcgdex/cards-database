import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Seleroc",
		de: "Lunastein"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Lunar Eclipse",
				fr: "Éclipse de lune",
				de: "Lunar Eclipse"
			},
			effect: {
				en: "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is Darkness. This power can't be used if Lunatone is affected by a Special Condition.\"",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Solaroc est en jeu, vous pouvez utiliser ce pouvoir. Jusqu'à la fin de votre tour, Seleroc est . Ce pouvoir ne peut pas être utilisé si Seleroc est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is . This power can't be used if Lunatone is affected by a Special Condition."
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
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Lunar Blast",
				fr: "Explosion lunaire",
				de: "Lunar Blast"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275785,
		tcgplayer: 86923
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
