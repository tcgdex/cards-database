import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		de: "Panflam"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [390],

	hp: 40,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Serial Swipes",
				fr: "Grands coups en série",
				de: "Schlagserie"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleepy",
				fr: "Somnolent",
				de: "Verschlafen"
			},
			effect: {
				en: "If you have Piplup in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Asleep.",
				fr: "Si vous avez Tiplouf en jeu, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi.",
				de: "Wenn du Plinfa im Spiel hast, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon schläft jetzt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	description: {
		en: "Its fiery rear end is fueld by gas made in its belly. Even rain can’t extinguish the fire.",
		fr: "La flamme de sa queue est alimentée par un gaz de son estomac. Même la pluie ne saurait l'éteindre.",
		de: "Das Feuer an seinem Hinterteil wird durch Gase im Bauch genährt. Selbst Regen löscht es nicht."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84289,
				cardmarket: 278564
			},
		},
	],

}

export default card
