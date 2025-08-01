import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
		es: "Clawitzer",
		it: "Clawitzer",
		pt: "Clawitzer",
		de: "Wummer"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		693,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
		es: "Clauncher",
		it: "Clauncher",
		pt: "Clauncher",
		de: "Scampisto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Reverse Thrust",
				fr: "Poussée Inverse",
				es: "Invertir Impulso",
				it: "Tornaindietro",
				pt: "Impulso Reverso",
				de: "Umkehrschub"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon do Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Splash Cannon",
				fr: "Canon Éclaboussant",
				es: "Cañón Chapoteo",
				it: "Cannonsplash",
				pt: "Canhão de Respingos",
				de: "Spritzkanone"
			},
			effect: {
				en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Energia Water ligada a este Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Water-Energie zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281688
	}
}

export default card
