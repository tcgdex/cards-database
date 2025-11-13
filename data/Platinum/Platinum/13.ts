import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Rampardos",
		fr: "Charkos",
		de: "Rameidon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		409,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cranidos",
		fr: "Kranidos",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Iron Skull",
				fr: "Crâne de fer",
				de: "Iron Skull"
			},
			effect: {
				en: "Rampardos's attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de l'attaque de Charkos ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "Rampardos's attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
			},
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
				de: "Head Smash"
			},
			effect: {
				en: "If the Defending Pokémon would be Knocked Out by this attack, Rampardos does 40 damage to itself.",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, Charkos s'inflige 40 dégâts.",
				de: "If the Defending Pokémon would be Knocked Out by this attack, Rampardos does 40 damage to itself."
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
				de: "Mold Breaker"
			},
			effect: {
				en: "Any damage done to Rampardos by attacks is reduced by 20 (after applying Weakness and Resistance) until the end of your next turn.",
				fr: "Tous dégâts infligés à Charkos par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance) jusqu'à la fin de votre prochain tour.",
				de: "Any damage done to Rampardos by attacks is reduced by 20 (after applying Weakness and Resistance) until the end of your next turn."
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

	thirdParty: {
		cardmarket: 278434,
		tcgplayer: 88571
	},

	variants:[
		{
			type:"holo"
		},
		{
			type:"reverse"
		}
	]
}

export default card
