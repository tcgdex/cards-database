import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		de: "Gengar"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sinister Fog",
				fr: "Brouillard Sinistre",
				de: "Nebel des Grauens"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent's Benched Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 1 marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Creep Show",
				fr: "Spectacle Perturbant",
				de: "Gruselkabinett"
			},
			effect: {
				en: "If your opponent's Active Pokémon has 3 or more damage counters on it, that Pokémon is Knocked Out.",
				fr: "Si le Pokémon Actif de votre adversaire a 3 marqueurs de dégâts ou plus, ce dernier est mis K.O.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 3 Schadensmarken liegen, wird jenes Pokémon kampfunfähig."
			},

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
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "Hiding in people's shadows at night, it absorbs their heat. The chill it causes makes the victims shake.",
		de: "Es versteckt sich im Schatten der Menschen und absorbiert deren Wärme, sodass die Menschen frieren."
	},

	thirdParty: {
		cardmarket: 288473,
		tcgplayer: 113693
	}
}

export default card
