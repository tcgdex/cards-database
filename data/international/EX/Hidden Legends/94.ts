import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Kyogre ex",
		'fr-fr': "Kyogre ex",
		'de-de': "Kyogre ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [382],

	hp: 100,

	stage: "Basic",
	types: [
		"Water"
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Mark of Antiquity",
				'fr-fr': "Marque d'antiquité",
				'de-de': "Mark of Antiquity"
			},
			effect: {
				'en-us': "As long as Kyogre ex is your Active Pokémon, each player's Groudon ex and Rayquaza ex can't attack.",
				'fr-fr': "Tant que Kyogre ex est votre Pokémon Actif, les Groudon ex et Rayquaza ex de chaque Joueur ne peuvent pas attaquer.",
				'de-de': "As long as Kyogre ex is your Active Pokémon, each player's Groudon ex and Rayquaza ex can't attack."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Water Arrow",
				'fr-fr': "Flèche d'eau",
				'de-de': "Water Arrow"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Super Tidal Wave",
				'fr-fr': "Super raz-de-marée",
				'de-de': "Super Tidal Wave"
			},
			effect: {
				'en-us': "You may show your hand to your opponent. If you do, this attack does 50 damage plus 10 more damage for each Energy card in your hand. After doing damage, shuffle the Energy cards back into your deck.",
				'fr-fr': "Vous pouvez montrer votre main à votre adversaire. Cette attaque inflige alors 50 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie dans votre main. Après avoir infligé des dégâts, mélangez les cartes Énergie à votre deck.",
				'de-de': "You may show your hand to your opponent. If you do, this attack does 50 damage plus 10 more damage for each Energy card in your hand. After doing damage, shuffle the Energy cards back into your deck."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 3,

	variants: [
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 86556,
				cardmarket: 276168
			}
		},
	]
}

export default card
