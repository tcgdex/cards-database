import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Magcargo",
		fr: "Volcaropod obscur",
		de: "Dunkles Magcargo"
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
		en: "Slugma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Hot Plate",
				fr: "Assiette chaude",
				de: "Hot Plate"
			},
			effect: {
				en: "As long as Dark Magcargo is your Active Pokémon, whenever a player puts a Baby Pokémon or Basic Pokémon onto his or her Bench from his or her hand, this power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working if Dark Magcargo is Asleep, Confused, or Paralyzed.",
				fr: "Tant que Volcaropod obscur est votre Pokémon Actif, quand un joueur place un Bébé Pokémon ou un Pokémon de base sur son Banc depuis sa main, ce pouvoir inflige 10 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance.) Ce pouvoir cesse de fonctionner si Volcaropod obscur est Endormi, Confus ou Paralysé.",
				de: "As long as Dark Magkargo is your Active Pokémon, whenever a player puts a Baby Pokémon or a Basic-Pokémon onto his or her Bench from his or her hand, this power does 10 damage to that Pokémon. (Don´t apply Weakness and Resistance.) This power stops working Dark Magcargo is Asleep, Confused, or Paralyzed."
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
				en: "Ball of Flame",
				fr: "Boule de flammes",
				de: "Ball of Flame"
			},
			effect: {
				en: "You may discard a Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez vous défausser d'une carte Énergie  attachée à Volcaropod obscur quand vous utilisez cette attaque. Si vous le faites, et si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 20 dégâts (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "You may discard a  Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don´t apply Weakness and Resistance for Benched Pokémon.)"
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

	description: {
		fr: "La carapace qui couvre son dos s'enlève facilement, exposant à l'air son corps enflammé."
	}
}

export default card
