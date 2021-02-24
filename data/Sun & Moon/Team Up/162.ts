import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pikachu & Zekrom-GX",
		fr: "Pikachu et Zekrom-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 240,
	types: [
		"Lightning",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Full Blitz",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Search your deck for up to 3 Lightning Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			},
			damage: 150,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Tag Bolt-GX",
				fr: "Attaque Absolue",
			},
			effect: {
				en: "If this Pokémon has at least 3 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 170 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 3 cartes Énergie Lightning dans votre deck et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck.",
			},
			damage: 200,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				fr: "Escouade Foudroyante-GX",
			},
			effect: {
				fr: "Si au moins 3 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 170 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
