import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Sawk",
		fr: "Karaclée",
		es: "Sawk",
		it: "Sawk",
		pt: "Sawk",
		de: "Karadonis"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [538],

	dexId: [
		539,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Kick of Righteousness",
				fr: "Coup de Pied Vertueux",
				de: "Rechtschaffener Tritt"
			},
			effect: {
				en: "If the Defending Pokémon is a Team Plasma Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon ein Team Plasma-Pokémon ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Sweep",
				fr: "Balayette",
				de: "Fußtritt"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Desiring the strongest karate chop, they seclude themselves in mountains and train without sleeping.",
		de: "Es lebt zurückgezogen in den Bergen und trainiert Tag und Nacht, um seinen Karateschlag zu perfektionieren."
	},

	thirdParty: {
		cardmarket: 281073,
		tcgplayer: 88940
	}
}

export default card
