import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'de-de': "Sonnfel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [338],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Solar Eclipse",
				'fr-fr': "Éclipse de soleil",
				'de-de': "Solar Eclipse"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Lunatone is in play, you may use this power. Until the end of your turn, Solrock's type is Fire. This power can't be used if Solrock is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si Seleroc est en jeu, vous pouvez utiliser ce pouvoir. Jusqu'à la fin du tour, Solaroc est . Ce pouvoir ne peut pas être utilisé si Solaroc est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), if Lunatone is in play, you may use this power. Until the end of your turn, Solrock's type is . This power can't be used if Solrock is affected by a Special Condition."
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
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solar Blast",
				'fr-fr': "Explosion solaire",
				'de-de': "Solar Blast"
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


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275790,
				tcgplayer: 89425
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275790,
				tcgplayer: 89425
			}
		},
	],

}

export default card
