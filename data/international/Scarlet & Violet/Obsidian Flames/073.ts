import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		'fr-fr': "Pohmarmotte-ex",
		'en-us': "Pawmot ex",
		'es-es': "Pawmot ex",
		'it-it': "Pawmot-ex",
		'pt-br': "Pawmot ex",
		'de-de': "Pamomamo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Pohmotte",
		'en-us': "Pawmo",
		'es-es': "Pawmo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo",
		'de-de': "Pamamo"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Coup de Pied Ravageur",
			'en-us': "Zap Kick",
			'es-es': "Electropatada",
			'it-it': "Dinamocalcio",
			'pt-br': "Chute Zap",
			'de-de': "Stromtritt"
		},

		damage: 60
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'fr-fr': "Fulguration",
			'en-us': "Levin Strike",
			'es-es': "Disparo Relámpago",
			'it-it': "Colposaetta",
			'pt-br': "Golpe Relampejante",
			'de-de': "Blitztreffer"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies {L} de ce Pokémon. Cette attaque inflige 220 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "Discard 2 {L} Energy from this Pokémon. This attack does 220 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Descarta 2 Energías {L} de este Pokémon. Este ataque hace 220 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta due Energie {L} da questo Pokémon. Questo attacco infligge 220 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte 2 Energias {L} deste Pokémon. Este ataque causa 220 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Lege 2 {L}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 220 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725153,
				tcgplayer: 509846,
				cardtrader: 255633
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

	
}

export default card
