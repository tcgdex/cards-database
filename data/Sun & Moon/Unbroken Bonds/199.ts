import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Marshadow & Machamp-GX",
		fr: "Marshadow et Mackogneur-GX",
	},
	illustrator: "You Iribi",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 270,
	types: [
		"Fightning",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Revenge",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 90 more damage.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Hundred-Blows Impact",
				fr: "Vendetta",
			},
			effect: {
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 160,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Acme of Heroism-GX",
				fr: "Les Cent Coups",
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), and if it would be Knocked Out by damage from an opponent's attack during their next turn, it is not Knocked Out, and its remaining HP becomes 10. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 200,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				fr: "Summum Héroïque-GX",
			},
			effect: {
				fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), et s’il doit être mis K.O. par les dégâts d’une attaque de l’adversaire pendant son prochain tour, ce Pokémon n’est pas mis K.O. et il lui reste 10 PV. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
