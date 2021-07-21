import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Glameow",
		fr: "Chaglam",
		es: "Glameow",
		it: "Glameow",
		pt: "Glameow",
		de: "Charmian"
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		431,
	],
	hp: 60,
	types: [
		"Colorless",
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boing Boing Tail",
				fr: "Queue Ressort",
				es: "Cola Doing Doing",
				it: "Coda a Molla",
				pt: "Cauda de Mola",
				de: "Hüpfschweif"
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent’s Pokémon-GX or Pokémon-EX. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon-GX o Pokémon-EX de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 60 danni a uno dei Pokémon-GX o Pokémon-EX del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon-GX ou Pokémon-EX do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon-GX oder Pokémon-EX deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
