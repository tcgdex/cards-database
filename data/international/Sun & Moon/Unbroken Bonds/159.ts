import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'es-es': "Glameow",
		'it-it': "Glameow",
		'pt-br': "Glameow",
		'de-de': "Charmian"
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
				'en-us': "Caturday",
				'fr-fr': "Chamedi",
				'es-es': "Sábado Gatuno",
				'it-it': "Giornogatto",
				'pt-br': "Dia de Gato",
				'de-de': "Schnurrtag"
			},
			effect: {
				'en-us': "Draw a card. If you do, this Pokémon is now Asleep.",
				'fr-fr': "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
				'es-es': "Roba 1 carta. Si lo haces, este Pokémon pasa a estar Dormido.",
				'it-it': "Pesca una carta. Se lo fai, questo Pokémon viene addormentato.",
				'pt-br': "Compre 1 carta. Se fizer isto, este Pokémon será Adormecido.",
				'de-de': "Ziehe 1 Karte. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Boing Boing Tail",
				'fr-fr': "Queue Ressort",
				'es-es': "Cola Doing Doing",
				'it-it': "Coda a Molla",
				'pt-br': "Cauda de Mola",
				'de-de': "Hüpfschweif"
			},
			effect: {
				'en-us': "This attack does 60 damage to 1 of your opponent’s Pokémon-GX or Pokémon-EX. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon-GX o Pokémon-EX de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon-GX o Pokémon-EX del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 60 pontos de dano a 1 dos Pokémon-GX ou Pokémon-EX do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon-GX oder Pokémon-EX deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	description: {
		'en-us': "It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.",
	},

	thirdParty: {
		cardmarket: 372447,
		tcgplayer: 189261
	}
}

export default card
