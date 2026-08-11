import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Groudon ex",
		'fr-fr': "Groudon ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 100,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Frenzy",
				'fr-fr': "Folie furieuse"
			},
			effect: {
				'en-us': "As long as your opponent has Kyogre, Kyogre ex, Rayquaza, or Rayquaza ex in play, Groudon ex's attacks do 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Tant que votre adversaire possède Kyogre, Kyogre ex, Rayquaza, Rayquaza ex en jeu, les attaques de Groudon ex infligent 40 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mix-Up",
				'fr-fr': "Mélange"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent discards the top card from his or her deck.",
				'fr-fr': "Lancez 1 pièce. Si c'est face, votre adversaire doit défausser la première carte de son deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme"
			},
			effect: {
				'en-us': "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

		variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 85931
			}
		}
	]
}

export default card
