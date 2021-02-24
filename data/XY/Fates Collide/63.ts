import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Vacuum Wave",
				fr: "Onde Vide",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Fight Alone",
				fr: "Combat Solitaire",
			},
			effect: {
				en: "If you have fewer Pokémon in play than your opponent, this attack does 60 more damage for each Pokémon fewer you have in play.",
				fr: "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 60 dégâts supplémentaires pour chaque Pokémon de moins que vous avez en jeu.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
