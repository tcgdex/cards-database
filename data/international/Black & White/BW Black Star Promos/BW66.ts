import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bright Look",
				'fr-fr': "Regard Alerte",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Hexed Flame",
				'fr-fr': "Flamme Maudite",
			},
			effect: {
				'en-us': "Does 50 more damage for each Special Condition affecting the Defending Pokémon.",
				'fr-fr': "Inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Défenseur.",
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

	retreat: 1,




	description: {
		'en-us': "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
	},
}

export default card
