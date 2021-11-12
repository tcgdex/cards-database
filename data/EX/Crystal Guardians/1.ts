import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
				fr: "Rune protectrice"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Banette by your opponent's Pokémon-ex.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Branette par les Pokémon-ex de votre adversaire."
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
				en: "Night Murmurs",
				fr: "Murmures nocturnes"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, il est maintenant Confus."
			},
			damage: 30,

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




}

export default card
