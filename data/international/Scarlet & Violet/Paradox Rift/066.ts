import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [644],
	set: Set,

	name: {
		'en-us': "Zekrom",
		'fr-fr': "Zekrom",
		'es-es': "Zekrom",
		'it-it': "Zekrom",
		'pt-br': "Zekrom",
		'de-de': "Zekrom"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Crushing Short",
			'fr-fr': "Court-Circuit Écrasant",
			'es-es': "Cortocircuito Demoledor",
			'it-it': "Spaccacircuito",
			'pt-br': "Curto Esmagador",
			'de-de': "Vernichtender Kurzschluss"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Raging Thunder",
			'fr-fr': "Tonnerre Déchaîné",
			'es-es': "Trueno Rabioso",
			'it-it': "Rombotuono",
			'pt-br': "Trovão Devastador",
			'de-de': "Tosender Donner"
		},

		effect: {
			'en-us': "This attack also does 40 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 40 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 40 puntos de daño a uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 40 danni a uno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 40 pontos de dano a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740557,
				tcgplayer: 523700,
				cardtrader: 265138
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 841258
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 853001
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740557,
				tcgplayer: 523700,
				cardtrader: 265138
			}
		},
	],

	illustrator: "Shiburingaru",

	
}

export default card
