import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Lugia-EX",
		'fr-fr': "Lugia ex",
	},
	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Overflow",
				'fr-fr': "Inondation",
			},
			effect: {
				'en-us': "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
				'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez 1 carte Récompense supplémentaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plasma Gale",
				'fr-fr': "Éclat Plasma",
			},
			effect: {
				'en-us': "Discard a Plasma Energy attached to this Pokémon. If you can't discard a Plasma Energy, this attack does nothing.",
				'fr-fr': "Défaussez une Énergie Plasma attachée à ce Pokémon. Si vous ne pouvez pas défausser une Énergie Plasma, cette attaque ne fait rien.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
