import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Raichu & Alolan Raichu-GX",
		fr: "Raichu et Raichu d’Alola-GX",
	},
	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 260,
	types: [
		"Lightning",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tandem Shock",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 80 more damage, and your opponent's Active Pokémon is now Paralyzed.",
			},
			damage: 80,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Ride-GX",
				fr: "Choc en Tandem",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. If this Pokémon has at least 2 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 100 more damage. (You can't use more than 1 GX attack in a game.)",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 80 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 150,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Tour d’Éclair-GX",
			},
			effect: {
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Si au moins 2 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "150+",

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
	retreat: 2,



}

export default card
