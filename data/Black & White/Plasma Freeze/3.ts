import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		es: "Beedrill",
		it: "Beedrill",
		pt: "Beedrill",
		de: "Bibor"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
		de: "Kokuna"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Swift Sting",
				fr: "Piqûre Vive",
				de: "Flinker Stachel"
			},
			effect: {
				en: "If this Pokémon has full HP, this attack does 40 more damage, and the Defending Pokémon is now Confused and Poisoned.",
				fr: "Si ce Pokémon a tous ses PV, cette attaque inflige 40 dégâts supplémentaires, et le Pokémon Défenseur est maintenant Confus et Empoisonné.",
				de: "Wenn dieses Pokémon volle KP hat, fügt dieser Angriff 40 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verwirrt und vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
				de: "Durchbohren"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "Its best attack involves flying around at high speed, striking with poison needles, then flying off.",
		de: "Sein bester Angriff: schnell auf den Gegner zufliegen, mit Giftstacheln zustechen und davonfliegen."
	},

	thirdParty: {
		cardmarket: 280881,
		tcgplayer: 83773
	}
}

export default card
