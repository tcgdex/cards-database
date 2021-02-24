import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Celebi & Venusaur-GX",
		fr: "Celebi et Florizarre-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 270,
	types: [
		"Grass",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pollen Hazard",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Pollen Dangereux",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			},
			damage: 150,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Evergreen-GX",
				fr: "Lance-Soleil",
			},
			effect: {
				en: "Heal all damage from this Pokémon. If this Pokémon has at least 1 extra Grass Energy attached to it (in addition to this attack's cost), shuffle all cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 180,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Sempervirent-GX",
			},
			effect: {
				fr: "Soignez tous les dégâts de ce Pokémon. Si au moins une Énergie Grass supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), mélangez toutes les cartes dans votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
