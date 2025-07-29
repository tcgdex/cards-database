import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Machamp",
		fr: "Mackogneur obscur",
		de: "Dunkles Machomei"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
				de: "Megahieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Fling",
				fr: "Lancer",
				de: "Austoben"
			},
			effect: {
				en: "Your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck. This attack can't be used if your opponent has no Benched Pokémon.",
				fr: "Votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées à son deck. Cette attaque ne peut être utilisée si votre adversaire n'a pas de Pokémon sur son Banc.",
				de: "Dein Gegnermischt sein oder ihr aktives Pokémon und alle darauf abgelegten Karten in sein oder ihr Deck. Dieser Angriff kann nicht gespielt werden, falls dein Gegner keine Pokémon auf derBank hat."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il est pratiquement impossible de se défendre contre les quatre bras d'un Mackogneur."
	},

	thirdParty: {
		cardmarket: 274063
	}
}

export default card
