import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Cobalion-EX",
		fr: "Cobaltium-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
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
				en: "Righteous Edge",
				fr: "Lame Vertueuse",
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
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
				en: "Steel Bullet",
				fr: "Balle d'Acier",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
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
