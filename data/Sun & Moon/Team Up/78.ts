import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Kabutops",
		fr: "Kabutops",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Kabuto",
		fr: "Kabuto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fossilized Memories",
				fr: "Souvenirs Fossilisés",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Supporter cards from their hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Supporter de sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
				fr: "Éboulement",
			},
			effect: {
				en: "This attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
