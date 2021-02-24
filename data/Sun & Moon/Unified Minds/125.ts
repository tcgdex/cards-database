import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Umbreon & Darkrai-GX",
		fr: "Noctali et Darkrai-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 270,
	types: [
		"Darkness",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Black Lance",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon-GX or Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 150,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dark Moon-GX",
				fr: "Lance Noire",
			},
			effect: {
				en: "Your opponent can't play any Trainer cards from their hand during their next turn. If this Pokémon has at least 5 extra Darkness Energy attached to it (in addition to this attack's cost), your opponent's Active Pokémon is Knocked Out. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 150,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Lune Sombre-GX",
			},
			effect: {
				fr: "Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour. Si au moins 5 Énergies Darkness supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), le Pokémon Actif de votre adversaire est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
