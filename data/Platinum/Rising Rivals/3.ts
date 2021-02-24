import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Darkrai G",
		fr: "Darkrai  Niv. 58",
	},
	illustrator: "Makoto Imai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 90,
	types: [
		"Darkness",
	],

	stage: "Basic",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Eerie Aura",
				fr: "Aura sinistre",
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon that remains Asleep between turns.",
				fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire qui reste Endormi entre deux tours.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Sleep",
				fr: "Dodo obscurité",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Asleep.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Endormi.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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
