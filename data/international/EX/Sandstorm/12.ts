import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'de-de': "Tengulist"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [275],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fan Away",
				'fr-fr': "Faire de l'air",
				'de-de': "Fan Away"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, return 1 Energy card attached to the Defending Pokémon to your opponent's hand. This power can't be used if Shiftry is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, votre adversaire reprend dans sa main une carte Énergie attachée au Pokémon Défenseur. Ce pouvoir ne peut pas être utilisé si Tengalice est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may flip a coin. If heads, return 1 Energy card attached to the Defending Pokémon to your opponent's hand. This power can't be used if Shiftry is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Light Touch Throw",
				'fr-fr': "Lancer léger",
				'de-de': "Light Touch Throw"
			},
			effect: {
				'en-us': "Does 80 damage minus 10 damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 80 dégâts moins 10 dégâts pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Does 80 damage minus 10 damage for each Energy attached to the Defending Pokémon."
			},
			damage: "80-",

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
				cardmarket: 275789,
				tcgplayer: 89152
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275789,
				tcgplayer: 89152
			}
		},
	],

}

export default card
