import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spinarak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reactive Poison",
				fr: "Poison réactif"
			},
			effect: {
				en: "Does 10 damage plus 30 more damage for each Special Condition affecting the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 30 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Défenseur."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spider Trap",
				fr: "Piège d'araignée"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned. Before applying this effect, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, the new Defending Pokémon is now Asleep and Poisoned. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné. Avant d'appliquer cet effet, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Le nouveau Pokémon Défenseur est alors Endormi et Empoisonné. Votre adversaire choisit le Pokémon Défenseur à échanger."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
