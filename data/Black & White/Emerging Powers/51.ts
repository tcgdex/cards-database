import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Boldore",
		fr: "Géolithe",
		es: "Boldore",
		it: "Boldore",
		pt: "Boldore",
		de: "Sedimantur"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		525,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
		de: "Kiesling"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Smack Down",
				fr: "Anti-Air",
				de: "Katapult"
			},
			effect: {
				en: "If the Defending Pokémon has Fighting Resistance, this attack does 60 more damage.",
				fr: "Si le Pokémon Défenseur a une Résistance à Fighting, cette attaque inflige 60 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon eine Resistenz gegenüber {F} hat, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
				de: "Juwelenkraft"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "When it overflows with power, the orange crystal on its body glows. It looks for underground water in caves.",
		de: "Wenn es voller Kraft steckt, funkeln die orangefarbenen Kristalle an seinem Leib. Es sucht Höhlen nach Grundwasser ab."
	},

	thirdParty: {
		cardmarket: 280016,
		tcgplayer: 83933
	}
}

export default card
