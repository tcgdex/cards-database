import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Magcargo",
		'fr-fr': "Volcaropod obscur",
		'de-de': "Dunkles Magcargo"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 60,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Hot Plate",
				'fr-fr': "Assiette chaude",
				'de-de': "Hot Plate"
			},
			effect: {
				'en-us': "As long as Dark Magcargo is your Active Pokémon, whenever a player puts a Baby Pokémon or Basic Pokémon onto his or her Bench from his or her hand, this power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working if Dark Magcargo is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Tant que Volcaropod obscur est votre Pokémon Actif, quand un joueur place un Bébé Pokémon ou un Pokémon de base sur son Banc depuis sa main, ce pouvoir inflige 10 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance.) Ce pouvoir cesse de fonctionner si Volcaropod obscur est Endormi, Confus ou Paralysé.",
				'de-de': "As long as Dark Magkargo is your Active Pokémon, whenever a player puts a Baby Pokémon or a Basic-Pokémon onto his or her Bench from his or her hand, this power does 10 damage to that Pokémon. (Don´t apply Weakness and Resistance.) This power stops working Dark Magcargo is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Ball of Flame",
				'fr-fr': "Boule de flammes",
				'de-de': "Ball of Flame"
			},
			effect: {
				'en-us': "You may discard a Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Vous pouvez vous défausser d'une carte Énergie  attachée à Volcaropod obscur quand vous utilisez cette attaque. Si vous le faites, et si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 20 dégâts (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "You may discard a  Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don´t apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "The shell on its back comes off easily, exposing the flames running through its body.",
		'fr-fr': "La carapace qui couvre son dos s'enlève facilement, exposant à l'air son corps enflammé."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274670,
				tcgplayer: 84622
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274670,
				tcgplayer: 84622
			}
		}
	]
}

export default card
