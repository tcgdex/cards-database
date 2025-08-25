import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		de: "Pantimos"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Focus Wall",
				fr: "Mur de concentration",
				de: "Fokusmauer"
			},
			effect: {
				en: "If Mr. Mime would be Knocked Out by damage from an attack that does 70 or more damage (after applying Weakness and Resistance), Mr. Mime is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Si M. Mime est mis K.O. par des dégâts d'une attaque infligeant 70 dégâts ou plus (après application de la Faiblesse et de la Résistance), M. Mime n'est pas mis K.O. À la place, il lui reste 10 PV.",
				de: "Wenn Pantimos durch Schaden eines Angriffs, der mindestens 70 Schadenspunkte zufügt (nachdem Schwäche und Resistenz verrechnet wurden) kampfunfähig würde, wird Pantimos nicht kampfunfähig und hat stattdessen 10 verbliebene KP."
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
				en: "Desperate Slap",
				fr: "Gifle désespérée",
				de: "Verzweifelter Hieb"
			},
			effect: {
				en: "If Mr. Mime already has 5 or more damage counters on it, this attack does 20 damage plus 40 more damage.",
				fr: "Si M. Mime possède déjà au moins 5 marqueurs de dégât, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
				de: "Wenn auf Pantimos bereits mindestens 5 Schadensmarken liegen, fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278728
	}
}

export default card
