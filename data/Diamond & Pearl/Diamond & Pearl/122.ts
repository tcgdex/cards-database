import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		389,
	],
	hp: 160,
	types: [
		"Grass",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Forest Murmurs",
				fr: "Murmures de la forêt",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have more Prize cards left than your opponent, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. This power can't be used if Torterra is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez plus de cartes Récompense que votre adversaire, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Torterra est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vigorous Dash",
				fr: "Ruée vigoureuse",
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Torterra does 30 damage to itself.",
				fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Torterra s'inflige 30 dégâts.",
			},
			damage: 100,

		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 4,



}

export default card
