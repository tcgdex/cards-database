import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Flygon-GX",
		fr: "Libégon-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 240,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dusty Defense",
				fr: "Défense Poussiéreuse",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, all of your Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, tous vos Pokémon subissent 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Desert Hurricane",
				fr: "Ouragan du Désert",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 120 more damage. Then, discard that Stadium card.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
			},
			damage: 120,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Sonic Edge-GX",
				fr: "Tranchant Sonique-GX",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 220,

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
