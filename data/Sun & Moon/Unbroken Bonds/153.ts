import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		463,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eat Up",
				fr: "Dévorer",
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards from your opponent's Active Pokémon. If you discarded a Pokémon Tool card in this way, heal all damage from this Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé une carte Outil Pokémon de cette façon, soignez tous les dégâts de ce Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tonguenado",
				fr: "Déferlante de Langues",
			},
			effect: {
				en: "Flip 4 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
