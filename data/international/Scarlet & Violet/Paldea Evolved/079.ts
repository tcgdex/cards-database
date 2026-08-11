import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [939],
	set: Set,

	name: {
		'fr-fr': "Ampibidou-ex",
		'en-us': "Bellibolt ex",
		'es-es': "Bellibolt ex",
		'it-it': "Bellibolt-ex",
		'pt-br': "Bellibolt ex",
		'de-de': "Wampitz-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Têtampoule",
		'en-us': "Tadbulb",
		'es-es': "Tadbulb",
		'it-it': "Tadbulb",
		'pt-br': "Tadbulb",
		'de-de': "Blipp"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Pression Sauteuse",
			'en-us': "Jumping Press",
			'es-es': "Presión Salto",
			'it-it': "Saltopressa",
			'pt-br': "Compressão Saltitante",
			'de-de': "Erdrückender Sprung"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Boule Paralysante",
			'en-us': "Paralyzing Ball",
			'es-es': "Bola Paralizante",
			'it-it': "Palla Paralizzante",
			'pt-br': "Bola Paralisante",
			'de-de': "Paralysierender Ball"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser 2 Énergies {L} de ce Pokémon pour laisser le Pokémon Actif de votre adversaire Paralysé.",
			'en-us': "You may discard 2 {L} Energy from this Pokémon to make your opponent's Active Pokémon Paralyzed.",
			'es-es': "Puedes descartar 2 Energías {L} de este Pokémon para dejar al Pokémon Activo de tu rival Paralizado.",
			'it-it': "Puoi scartare due Energie {L} da questo Pokémon per lasciare il Pokémon attivo del tuo avversario paralizzato.",
			'pt-br': "Você pode descartar 2 Energias {L} deste Pokémon para deixar o Pokémon Ativo do seu oponente Paralisado.",
			'de-de': "Du kannst 2 {L}-Energien von diesem Pokémon auf deinen Ablagestapel legen, um das Aktive Pokémon deines Gegners zu paralysieren."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715554,
				tcgplayer: 497490,
				cardtrader: 248706
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Yamashita",

	
}

export default card
