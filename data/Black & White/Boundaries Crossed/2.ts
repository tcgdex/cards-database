import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		it: "Gloom",
		pt: "Gloom",
		de: "Duflor"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
		de: "Myrapla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Foul Odor",
				fr: "Odeur Fétide",
				de: "Fäulnisgeruch"
			},
			effect: {
				en: "Both this Pokémon and the Defending Pokémon are now Confused.",
				fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
				de: "Dieses Pokémon und das Verteidigende Pokémon sind jetzt verwirrt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Powder",
				fr: "Poudre Toxik",
				de: "Giftpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
		de: "Der Honig, den es abgibt, riecht so entsetzlich, dass sich sogar Nasen in 2 km Entfernung rümpfen."
	},

	thirdParty: {
		cardmarket: 280589,
		tcgplayer: 85787
	}
}

export default card
