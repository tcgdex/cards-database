import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'de-de': "Ariados"
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
		'en-us': "Spinarak",
		'fr-fr': "Mimigal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reactive Poison",
				'fr-fr': "Poison réactif",
				'de-de': "Reactive Poison"
			},
			effect: {
				'en-us': "Does 10 damage plus 30 more damage for each Special Condition affecting the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts plus 30 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Défenseur.",
				'de-de': "Does 10 damage plus 30 more damage for each Special Condition affecting the Defending Pokémon."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spider Trap",
				'fr-fr': "Piège d'araignée",
				'de-de': "Spider Trap"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep and Poisoned. Before applying this effect, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, the new Defending Pokémon is now Asleep and Poisoned. Your opponent chooses the Defending Pokémon to switch.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi et Empoisonné. Avant d'appliquer cet effet, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Le nouveau Pokémon Défenseur est alors Endormi et Empoisonné. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				'de-de': "The Defending Pokémon is now Asleep and Poisoned. Before applying this effect, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, the new Defending Pokémon is now Asleep and Poisoned. Your opponent choose the Defending Pokémon to switch."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83616,
				cardmarket: 276648
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83616,
				cardmarket: 276648
			},
		}
	],
}

export default card
