import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Rampardos",
		fr: "Charkos",
		de: "Rameidon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [409],

	hp: 130,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Cranidos",
		fr: "Kranidos",
		de: "Koknodon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Iron Skull",
				fr: "Crâne de fer",
				de: "Metallschädel"
			},
			effect: {
				en: "Rampardos's attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de l'attaque de Charkos ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte von Rameidons Angriffen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Head Smash",
				fr: "Fracass'Tête",
				de: "Kopfstoß"
			},
			effect: {
				en: "If the Defending Pokémon would be Knocked Out by this attack, Rampardos does 40 damage to itself.",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, Charkos s'inflige 40 dégâts.",
				de: "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig würde, fügt Rameidon sich selbst 40 Schadenspunkte zu."
			},
			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mold Breaker",
				fr: "Brise Moule",
				de: "Überbrückung"
			},
			effect: {
				en: "Any damage done to Rampardos by attacks is reduced by 20 (after applying Weakness and Resistance) until the end of your next turn.",
				fr: "Tous dégâts infligés à Charkos par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance) jusqu'à la fin de votre prochain tour.",
				de: "Bis zum Ende deines nächsten Zuges wird Schaden, den Rameidon durch Angriffe erhalten soll, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 88571,
				cardmarket: 278434
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278434,
				tcgplayer: 88571
			}
		}
	],

}

export default card
