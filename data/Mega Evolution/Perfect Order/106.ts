import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [227],

	name: {
		en: "Mega Skarmory ex",
		fr: "Méga-Airmure-ex",
		es: "Mega-Skarmory ex",
		'es-mx': "Mega-Skarmory ex",
		de: "Mega-Panzaeron-ex",
		it: "Mega Skarmory-ex",
		pt: "Mega Skarmory ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Sonic Ripper",
			fr: "Étripage Sonique",
			es: "Desgarro Sónico",
			'es-mx': "Desgarre Sónico",
			de: "Überschallreißer",
			it: "Squarcio Sonico",
			pt: "Talho Sônico"
		},

		effect: {
			en: "Shuffle all Energy attached to this Pokémon into your deck, and this attack does 220 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Mélangez toutes les Énergies attachées à ce Pokémon avec votre deck. Cette attaque inflige 220 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Pon todas las Energías unidas a este Pokémon en tu baraja y baraja todas las cartas, y este ataque hace 220 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Baraja todas las Energías unidas a este Pokémon en tu mazo, y este ataque hace 220 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Mische alle an dieses Pokémon angelegten Energien in dein Deck, und diese Attacke fügt 1 Pokémon deines Gegners 220 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Rimischia tutte le Energie assegnate a questo Pokémon nel tuo mazzo e questo attacco infligge 220 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Embaralhe todas as Energias ligadas a este Pokémon no seu baralho, e este ataque causa 220 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684352,
		cardmarket: 877523
	}
}

export default card
