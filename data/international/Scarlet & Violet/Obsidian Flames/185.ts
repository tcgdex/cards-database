import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [973],
	set: Set,

	name: {
		'fr-fr': "Flamenroule",
		'en-us': "Flamigo",
		'es-es': "Flamigo",
		'it-it': "Flamigo",
		'pt-br': "Flamigo",
		'de-de': "Flaminkno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Picpic",
			'en-us': "Peck",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Plumes Synchronisées",
			'en-us': "Synchronized Feathers",
			'es-es': "Plumas Sincronizadas",
			'it-it': "Piume Sincronizzate",
			'pt-br': "Penas Sincronizadas",
			'de-de': "Synchronfedern"
		},

		effect: {
			'fr-fr': "Si Flamenroule est sur votre Banc, cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "If Flamigo is on your Bench, this attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Si Flamigo está en tu Banca, este ataque también hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Se Flamigo è nella tua panchina, questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Se Flamigo estiver no seu Banco, este ataque também causará 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Wenn sich Flaminkno auf deiner Bank befindet, fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60
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
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon apparently ties the base of its neck into a knot so that the energy stored in its belly does not escape from its beak.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725265,
				tcgplayer: 510901,
				cardtrader: 256081
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725265,
				tcgplayer: 510901,
				cardtrader: 256081
			}
		},
	],

	illustrator: "Hiroki Asanuma",

	
}

export default card
