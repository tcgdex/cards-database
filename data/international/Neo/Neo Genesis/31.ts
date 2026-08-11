import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'de-de': "Tyracroc"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Screech",
				'fr-fr': "Grincement",
				'de-de': "Screech"
			},
			effect: {
				'en-us': "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				'fr-fr': "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires au Pokémon Défenseur.",
				'de-de': "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Jaw Clamp",
				'fr-fr': "Verrouillage de mâchoires",
				'de-de': "Jaw Clamp"
			},
			effect: {
				'en-us': "Until the end of your opponent's next turn, as long as Croconaw is your Active Pokémon, the Defending Pokémon can't retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing.",
				'fr-fr': "Jusqu'à la fin du prochain tour de votre adversaire, et tant que Crocrodil est votre Pokémon Actif, le Pokémon Défenseur ne peut pas battre en retraite, et si l'effet d'une attaque, Pouvoir Pokémon ou carte Dresseur vient à changer le Pokémon Actif de ce joueur, cette partie de l'effet ne fait rien.",
				'de-de': "Until the end of opponent's next turn, as long as Croconaw is your Active Pokémon, the Defending Pokémon can't retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.",
		'fr-fr': "S'il perd un croc, un nouveau poussera pour le remplacer. Il y a toujours 48 crocs dans sa bouche."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274431,
				tcgplayer: 84495
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274431,
				tcgplayer: 84495
			}
		}
	]
}

export default card
