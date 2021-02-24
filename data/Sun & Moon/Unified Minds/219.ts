import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Keldeo-GX",
		fr: "Keldeo-GX",
	},
	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 170,
	types: [
		"Water",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Pure Heart",
				fr: "Cœur Pur",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-GX or Pokémon-EX.",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-GX ou les Pokémon-EX de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Sonic Edge",
				fr: "Tranchant Sonique",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 110,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Resolute Blade-GX",
				fr: "Lame Décidée-GX",
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

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
