import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		it: "Espurr",
		pt: "Espurr",
		de: "Psiau"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		677,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Caturday",
				fr: "Chamedi",
				es: "Sábado Gatuno",
				it: "Giornogatto",
				pt: "Dia de Gato",
				de: "Schnurrtag"
			},
			effect: {
				en: "Draw a card. If you do, this Pokémon is now Asleep.",
				fr: "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
				es: "Roba 1 carta. Si lo haces, este Pokémon pasa a estar Dormido.",
				it: "Pesca una carta. Se lo fai, questo Pokémon viene addormentato.",
				pt: "Compre 1 carta. Se fizer isto, este Pokémon será Adormecido.",
				de: "Ziehe 1 Karte. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ear Kinesis",
				fr: "Oreille Kinésique",
				es: "Orejaquinesis",
				it: "Ascolto Cinetico",
				pt: "Cinese de Orelha",
				de: "Ohrkinese"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent’s Benched Pokémon for each damage counter on that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival por cada contador de daño en ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon in panchina del tuo avversario per ogni segnalino danno su quel Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente para cada contador de dano naquele Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte mal der Anzahl der Schadensmarken auf jenem Pokémon zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372367
	}
}

export default card
