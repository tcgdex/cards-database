import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Florges",
		'fr-fr': "Florges",
		'es-es': "Florges",
		'it-it': "Florges",
		'pt-br': "Florges",
		'de-de': "Florges"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		671,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Brilliant Search",
				'fr-fr': "Recherche Brillante",
				'es-es': "Búsqueda Brillante",
				'it-it': "Splendicerca",
				'pt-br': "Busca Brilhante",
				'de-de': "Brillante Suche"
			},
			effect: {
				'en-us': "Search your deck for up to 3 cards and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 3 cartes dans votre deck puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure até 3 cards em seu baralho e coloque-os na sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Petal Blizzard",
				'fr-fr': "Tempête Florale",
				'es-es': "Tormenta Floral",
				'it-it': "Fiortempesta",
				'pt-br': "Nevasca de Pétalas",
				'de-de': "Blütenwirbel"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 de dano para cada Pokémon de seu oponente. (Fraqueza e Resistência não são aplicadas para Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It claims exquisite flower gardens as its territory, and it obtains power from basking in the energy emitted by flowering plants.",
	},

	thirdParty: {
		cardmarket: 281549,
		tcgplayer: 91203
	}
}

export default card
