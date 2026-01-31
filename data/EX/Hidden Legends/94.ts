import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Kyogre ex",
		fr: "Kyogre ex",
		de: "Kyogre ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 100,

	types: [
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mark of Antiquity",
				fr: "Marque d'antiquité",
				de: "Mark of Antiquity"
			},
			effect: {
				en: "As long as Kyogre ex is your Active Pokémon, each player's Groudon ex and Rayquaza ex can't attack.",
				fr: "Tant que Kyogre ex est votre Pokémon Actif, les Groudon ex et Rayquaza ex de chaque Joueur ne peuvent pas attaquer.",
				de: "As long as Kyogre ex is your Active Pokémon, each player's Groudon ex and Rayquaza ex can't attack."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Arrow",
				fr: "Flèche d'eau",
				de: "Water Arrow"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Super Tidal Wave",
				fr: "Super raz-de-marée",
				de: "Super Tidal Wave"
			},
			effect: {
				en: "You may show your hand to your opponent. If you do, this attack does 50 damage plus 10 more damage for each Energy card in your hand. After doing damage, shuffle the Energy cards back into your deck.",
				fr: "Vous pouvez montrer votre main à votre adversaire. Cette attaque inflige alors 50 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie dans votre main. Après avoir infligé des dégâts, mélangez les cartes Énergie à votre deck.",
				de: "You may show your hand to your opponent. If you do, this attack does 50 damage plus 10 more damage for each Energy card in your hand. After doing damage, shuffle the Energy cards back into your deck."
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

	thirdParty: {
		cardmarket: 276168,
		tcgplayer: 86556
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
