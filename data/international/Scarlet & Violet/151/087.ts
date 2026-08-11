import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [87],
	set: Set,

	name: {
		'fr-fr': "Lamantine",
		'en-us': "Dewgong",
		'es-es': "Dewgong",
		'it-it': "Dewgong",
		'pt-br': "Dewgong",
		'de-de': "Jugong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Otaria",
		'en-us': "Seel",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Double Splash",
			'en-us': "Dual Splash",
			'es-es': "Doble Salpicadura",
			'it-it': "Doppiosplash",
			'pt-br': "Esguicho Duplo",
			'de-de': "Doppelplatscher"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Onde Boréale",
			'en-us': "Aurora Beam",
			'es-es': "Rayo Aurora",
			'it-it': "Raggiaurora",
			'pt-br': "Raio Aurora",
			'de-de': "Aurorastrahl"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733682,
				tcgplayer: 516656,
				cardtrader: 261169
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733682,
				tcgplayer: 516656,
				cardtrader: 261169
			}
		},
	],

	illustrator: "aoki",

	
}

export default card
