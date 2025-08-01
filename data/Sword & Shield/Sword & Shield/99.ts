import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		es: "Rhyperior",
		it: "Rhyperior",
		pt: "Rhyperior",
		de: "Rihornior"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
				es: "Avalancha de Rocas",
				it: "Tiramassi",
				pt: "Desabamento de Pedras",
				de: "Rollende Felsen"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 90,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bedrock Shake",
				fr: "Secousse Tectonique",
				es: "Temblor de Cimientos",
				it: "Scossone Roccioso",
				pt: "Tremor de Rocha",
				de: "Felsrüttler"
			},
			effect: {
				en: "This attack also does 60 damage to each Benched Pokémon that has any damage counters on it (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 60 dégâts à chacun des Pokémon de Banc ayant au moins un marqueur de dégâts (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 60 puntos de daño a cada Pokémon en Banca que tenga algún contador de daño sobre él (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 60 danni a ciascuno dei Pokémon in panchina che ha dei segnalini danno, sia tuoi che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 60 pontos de dano a cada um dos Pokémon no Banco que tiver algum contador de dano nele (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Diese Attacke fügt auch jedem Pokémon auf der Bank (deiner und der deines Gegners), auf dem mindestens eine Schadensmarke liegt, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		en: "It relies on its carapace to deflect incoming attacks and throw its enemy off balance. As soon as that happens, it drives its drill into the foe."
	},

	dexId: [464],

	thirdParty: {
		cardmarket: 436614
	}
}

export default card
