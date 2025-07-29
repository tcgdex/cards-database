import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
		de: "Skorgro"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		472,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Ninja Fang",
				fr: "Croc Ninja",
				de: "Ninjafänge"
			},
			effect: {
				en: "If, before Gliscor does damage, the Defending Pokémon has no damage counters on it and is then damaged by this attack (after applying Weakness and Resistance), the Defending Pokémon is now Paralyzed.",
				fr: "Si, avant que Scorvol n’inflige de dégâts, le Pokémon Défenseur n’a aucun marqueur de dégât et qu’il subit ensuite des dégâts à cause de cette attaque (après application de la Faiblesse et de la Résistance), il est maintenant Paralysé.",
				de: "Falls auf dem Verteidigendem Pokémon vor durch Skorgro zugefügtem Schaden keine Schadensmarken liegen, und ihm durch diesen Angriff Schaden zugefügt wird (nachdem Schwäche und Resistenz verrechnet wurden), ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
				de: "Gifthieb"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its flight is soundless. It uses its lengthy tail to carry off its prey… Then its elongated fangs do the rest."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279257
	}
}

export default card
