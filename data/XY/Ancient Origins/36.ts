import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Hoopa EX",
		fr: "Hoopa EX",
		es: "Hoopa EX",
		it: "Hoopa EX",
		pt: "Hoopa EX",
		de: "Hoopa EX"
	},

	illustrator: "Ryota Murayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scoundrel Ring",
				fr: "Anneau Malicieux",
				es: "Anillo Perverso",
				it: "Anello Malandrino",
				pt: "Anel Vigarista",
				de: "Spitzbubenring"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may search your deck for up to 3 Pokémon-EX (except for Hoopa-EX), reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez chercher jusqu'à 3 Pokémon-EX(à part Hoopa-EX) dans votre deck, les montrer et les ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Cuando juegues este Pokémon de tu mano para ponerlo en tu Banca, puedes buscar en tu baraja hasta 3 Pokémon-EX (excepto Hoopa-EX), enseñarlos y ponerlos en tu mano. Baraja las cartas de tu baraja después.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi cercare nel tuo mazzo fino a tre Pokémon-EX (a eccezione di Hoopa-EX), mostrarli e aggiungerli alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Ao jogar este Pokémon da sua mão no Banco, você pode procurar até 3 PokémonEX (exceto o Hoopa-EX) no seu baralho, revelá-los e colocá-los na sua mão. Em seguida, embaralhe seus cards.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du dein Deck nach bis zu 3 Pokémon-EX (außer Hoopa-EX) durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Hyperspace Fury",
				fr: "Furie Dimension",
				es: "Cerco Dimensión",
				it: "Urtodimensionale",
				pt: "Fúria de Hiperespaço",
				de: "Dimensionswahn"
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon. This attack does 100 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies attachées à ce Pokémon. Cette attaque inflige 100 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta 2 Energías unidas a este Pokémon. Este ataque hace 100 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta due Energie assegnate a questo Pokémon. Questo attacco infligge 100 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte 2 Energias ligadas a este Pokémon. Este ataque causa 100 de danos a 1 dos Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt 1 Pokémon deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 284217
	}
}

export default card
