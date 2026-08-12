import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		de: "Tentantel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		598,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
		de: "Kastadur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Steel Feelers",
				fr: "Tentacules d'Acier",
				de: "Stahlfühler"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
				fr: "Gyroballe",
				de: "Gyroball"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Danach tauscht dein Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "They attach themselves to cave ceilings, firing steel spikes at targets passing beneath them.",
		de: "Es setzt sich an der Decke von Höhlen fest und wirft seine dornengespickten Schlingen auf vorbeigehende Beute ab."
	},

	thirdParty: {
		cardmarket: 280037,
		tcgplayer: 85428
	}
}

export default card
