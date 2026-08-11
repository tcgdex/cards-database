import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Greninja",
		'fr-fr': "Amphinobi",
	},

	illustrator: "Akira Komayama",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mist Concealment",
				'fr-fr': "Voile de Brume",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon during your opponent's next turn.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez éviter tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon de votre adversaire pendant son prochain tour.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Bullet",
				'fr-fr': "Kunaï Sournois",
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "−20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.",
	},

	thirdParty: {
		cardmarket: 678788
	}
}

export default card
