import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo Niv. 47",
		de: "Smogmog"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Camouflage Gas",
				fr: "Gaz de camouflage",
				de: "Tarngas"
			},
			effect: {
				en: "If Weezing is Confused and is Knocked Out, your opponent can't take a Prize card.",
				fr: "Si Smogogo est Confus et qu'il est mis K.O, votre adversaire ne peut pas récolter de carte Récompense.",
				de: "Wenn Smogmog verwirrt ist und kampfunfähig wird, kann dein Gegner keinen Preis nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Damage Breakdown",
				fr: "Casse-dégâts",
				de: "Schadenverteilung"
			},
			effect: {
				en: "Count the number of damage counters on Weezing. Put that many damage counters on the Defending Pokémon and Weezing is now Confused.",
				fr: "Comptabilisez le nombre de marqueurs de dégât sur Smogogo. Placez autant de marqueurs de dégât sur le Pokémon Défenseur et Smogogo est maintenant Confus.",
				de: "Zähle die Anzahl der Schadensmarken auf Smogmog. Lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon und Smogmog ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Smog",
				fr: "Purédpois",
				de: "Smog"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278661
	}
}

export default card
