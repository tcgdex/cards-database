import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [695],
	set: Set,

	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'es-es': "Heliolisk",
		'it-it': "Heliolisk",
		'pt-br': "Heliolisk",
		'de-de': "Elezard"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
		'de-de': "Eguana"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'de-de': "Nagen",
			'es-es': "Roer",
			'pt-br': "Roída",
			'it-it': "Rosicchiamento"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electrobullet",
			'fr-fr': "Électrojectile",
			'de-de': "Elektrokugel",
			'es-es': "Electrobala",
			'pt-br': "Bala Elétrica",
			'it-it': "Elettrodardo"
		},

		damage: 60,

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582492,
				tcgplayer: 253255
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582492,
				tcgplayer: 253255
			}
		},
	],
}

export default card
