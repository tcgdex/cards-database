import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Lunatone",
		'fr-fr': "Seleroc",
		'de-de': "Lunastein"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [337],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Lunar Eclipse",
				'fr-fr': "Éclipse de lune",
				'de-de': "Lunar Eclipse"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is Darkness. This power can't be used if Lunatone is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si Solaroc est en jeu, vous pouvez utiliser ce pouvoir. Jusqu'à la fin de votre tour, Seleroc est . Ce pouvoir ne peut pas être utilisé si Seleroc est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is . This power can't be used if Lunatone is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cosmic Draw",
				'fr-fr': "Pioche cosmik",
				'de-de': "Cosmic Draw"
			},
			effect: {
				'en-us': "If your opponent has any Evolved Pokémon in play, draw 3 cards.",
				'fr-fr': "Si votre adversaire a un Pokémon Évolué en jeu, piochez trois cartes.",
				'de-de': "If your opponent has any Evolved Pokémon in play, draw 3 cards."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Lunar Blast",
				'fr-fr': "Explosion lunaire",
				'de-de': "Lunar Blast"
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


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275785,
				tcgplayer: 86923
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275785,
				tcgplayer: 86923
			}
		},
	],

}

export default card
