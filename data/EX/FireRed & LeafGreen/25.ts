import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade"
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		97,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drowsee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Eerie Aura",
				fr: "Aura sinistre"
			},
			effect: {
				en: "As long as Hypno is your Active Pokémon, put 2 damage counters on each Pokémon that remains Asleep between turns.",
				fr: "Tant qu'Hypnomade est votre Pokémon Actif, placez 2 marqueurs de dégât sur chaque Pokémon qui reste Endormi entre deux tours."
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
				en: "Hypnotic Ray",
				fr: "Onde hypnotique"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
