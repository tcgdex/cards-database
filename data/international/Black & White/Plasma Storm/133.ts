import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Cobalion-EX",
		'fr-fr': "Cobaltium-EX",
		'es-es': "Cobalion-EX",
		'it-it': "Cobalion-EX",
		'pt-br': "Cobalion-EX",
		'de-de': "Kobalium-EX"
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		638,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Righteous Edge",
				'fr-fr': "Lame Vertueuse",
			},
			effect: {
				'en-us': "Discard a Special Energy attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Steel Bullet",
				'fr-fr': "Balle d'Acier",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
