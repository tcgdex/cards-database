import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
		es: "Whirlipede",
		it: "Whirlipede",
		pt: "Whirlipede",
		de: "Rollum"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		544,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
		de: "Toxiped"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
				de: "Giftschock"
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 60 more damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon vergiftet ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steamroller",
				fr: "Bulldoboule",
				de: "Quetschwalze"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
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

	retreat: 3,

	description: {
		en: "It is usually motionless, but when attacked, it rotates at high speed and then crashes into its opponent.",
		de: "An sich ist es harmlos. Bringt man es jedoch in Bedrängnis, setzt es sich mit blitzschnellen Rollattacken zur Wehr."
	},

	thirdParty: {
		cardmarket: 280004,
		tcgplayer: 90571
	}
}

export default card
