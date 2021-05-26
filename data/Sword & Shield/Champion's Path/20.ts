import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Hatterene",
		fr: "Sorcilence"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Hattrem",
		fr: "Chapotus"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hazard Sensor",
				fr: "Capteur de Danger"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque d’un Pokémon de votre adversaire (même si ce Pokémon-ci est mis K.O.), le Pokémon Attaquant est maintenant Confus."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Life Sucker",
				fr: "Aspire-Vie"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
