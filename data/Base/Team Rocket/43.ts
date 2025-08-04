import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Primeape",
		fr: "Colossinge obscur",
		de: "Dunkles Rasaff"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Frenzy",
				fr: "Pète les plombs",
				de: "Frenzy"
			},
			effect: {
				en: "If Dark Primeape does any damage while it's Confused (even to itself), it does 30 more damage.",
				fr: "Si Colossinge obscur inflige des dégâts lorsqu'il est Confus (y compris à lui-même), il inflige 30 dégâts supplémentaires.",
				de: "If Dark Primeape does any damage while it's Confused (even to itself), it dies 20 more damage."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Frenzied Attack",
				fr: "Attaque frénétique",
				de: "Frenzied Attack"
			},
			effect: {
				en: "Dark Primeape is now Confused (after doing damage).",
				fr: "Colossinge obscur est maintenant Confus (après application des dégâts).",
				de: "Dark Primeape is now Confused (after doing damage)."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Bien que les Colossinge aient toujours été mauvais, il semble que depuis peu, ils deviennent de plus en plus vicieux et frénétiques."
	},

	thirdParty: {
		cardmarket: 274096,
		tcgplayer: 84641
	}
}

export default card
