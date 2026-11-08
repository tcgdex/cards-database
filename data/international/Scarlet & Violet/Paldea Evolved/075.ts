import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [922],
	set: Set,

	name: {
		'fr-fr': "Pohmotte",
		'en-us': "Pawmo",
		'es-es': "Pawmo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo",
		'de-de': "Pamamo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Pohm",
		'en-us': "Pawmi",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'pt-br': "Pawmi",
		'de-de': "Pamo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Choc Statique",
			'en-us': "Static Shock",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'fr-fr': "Électrojectile",
			'en-us': "Electrobullet",
			'es-es': "Electrobala",
			'it-it': "Elettrodardo",
			'pt-br': "Bala Elétrica",
			'de-de': "Elektrokugel"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715550,
				tcgplayer: 497486,
				cardtrader: 248702
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715550,
				tcgplayer: 497486,
				cardtrader: 248702
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	description: {
		'en-us': "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",
	},
}

export default card
