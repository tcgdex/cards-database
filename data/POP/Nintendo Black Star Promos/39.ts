import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Rayquaza ex",
		fr: "Rayquaza ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Frenzy",
				fr: "Folie furieuse"
			},
			effect: {
				en: "As long as your opponent has Kyogre, Kyogre ex, Groudon, or Groudon ex in play, Rayquaza ex's attacks do 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que votre adversaire possède Kyogre, Kyogre ex, Groudon, Groudon ex en jeu, les attaques de Rayquaza ex infligent 40 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Bind",
				fr: "Aveuglement draconique"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 1 pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Twister",
				fr: "Ouragan"
			},
			effect: {
				en: "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Si ce sont deux piles, cette attaque est sans effet. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
