import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Glaceon-GX",
		'fr-fr': "Givrali-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		471,
	],
	hp: 200,
	types: [
		"Water",
	],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Freezing Gaze",
				'fr-fr': "Regard Glacial",
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent's Pokémon-GX and Pokémon-EX in play, in their hand, and in their discard pile have no Abilities, except for Freezing Gaze.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon-GX et les Pokémon-EX de votre adversaire en jeu, dans sa main et dans sa pile de défausse n’ont pas de talent, à l’exception de Regard Glacial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frost Bullet",
				'fr-fr': "Kunaï Givré",
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 90,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Polar Spear-GX",
				'fr-fr': "Lance Polaire-GX",
			},
			effect: {
				'en-us': "This attack does 50 damage for each damage counter on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
