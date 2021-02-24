import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lugia-EX",
		fr: "Lugia-EX",
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
				en: "Overflow",
				fr: "Débordement",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez 1 carte Récompense supplémentaire.",
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
				en: "Plasma Gale",
				fr: "Bourrasque Plasma",
			},
			effect: {
				en: "Discard a Plasma Energy attached to this Pokémon. If you can't discard a Plasma Energy, this attack does nothing.",
				fr: "Défaussez une Énergie Plasma attachée à ce Pokémon. Si vous ne pouvez pas défausser une Énergie Plasma, cette attaque ne fait rien.",
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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
