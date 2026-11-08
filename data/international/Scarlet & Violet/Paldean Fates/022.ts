import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		'en-us': "Kilowattrel",
		'fr-fr': "Fulgulairo",
		'es-es': "Kilowattrel",
		'it-it': "Kilowattrel",
		'pt-br': "Kilowattrel",
		'de-de': "Voltrean"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Wattrel",
		'fr-fr': "Zapétrel",
		'es-es': "Wattrel",
		'it-it': "Wattrel",
		'pt-br': "Wattrel",
		'de-de': "Voltrel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "United Thunder",
			'fr-fr': "Tonnerre Uni",
			'es-es': "Truenos Unidos",
			'it-it': "Tuono Unito",
			'pt-br': "União de Trovões",
			'de-de': "Vereinter Donner"
		},

		effect: {
			'en-us': "This attack does 10 damage for each Pokémon in your discard pile that has the United Wings attack to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 10 dégâts à l'un des Pokémon de Banc de votre adversaire pour chaque Pokémon dans votre pile de défausse ayant l'attaque Ailes Unies. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 10 puntos de daño a uno de los Pokémon en Banca de tu rival por cada Pokémon en tu pila de descartes que tenga el ataque Alas Unidas. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 10 danni a uno dei Pokémon nella panchina del tuo avversario per ogni Pokémon nella tua pila degli scarti che ha l'attacco Ali Unite. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque União Alada a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte für jedes Pokémon in deinem Ablagestapel, das die Attacke Vereinte Schwingen hat, zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Speed Wing",
			'fr-fr': "Ailes Vives",
			'es-es': "Ala Veloz",
			'it-it': "Alaveloce",
			'pt-br': "Asa da Velocidade",
			'de-de': "Turboschwinge"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751552,
				tcgplayer: 534168,
				cardtrader: 274206
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751552,
				tcgplayer: 534168,
				cardtrader: 274206
			}
		},
	],

	illustrator: "AKIRA EGAWA",

	description: {
		'en-us': "Kilowattrel inflates its throat sac to amplify its electricity. By riding the wind, this Pokémon can fly over 430 miles in a day.",
	},

}

export default card
