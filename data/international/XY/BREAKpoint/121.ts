import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Ho-Oh EX",
		'fr-fr': "Ho-Oh EX",
		'es-es': "Ho-Oh EX",
		'it-it': "Ho-Oh EX",
		'pt-br': "Ho-Oh EX",
		'de-de': "Ho-Oh EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Purifying Fire",
				'fr-fr': "Feu Purifiant",
				'es-es': "Fuego Purificador",
				'it-it': "Purifiamma",
				'pt-br': "Fogo Purificador",
				'de-de': "Reinigendes Feuer"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon has any basic Fire Energy attached to it, you may heal 50 damage from it.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si de l'Énergie Fire de base est attachée à ce Pokémon, vous pouvez soigner 50 dégâts à ce Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon tiene alguna Energía Fire Básica unida a él, puedes curarle 50 puntos de daño.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon ha delle Energie base Fire assegnate, puoi curarlo da 50 danni.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon tiver alguma Energia Fire básica ligada a ele, você poderá curar 50 de danos dele.",
				'de-de': "Wenn an dieses Pokémon bereits mindestens 1 Fire-Basis-Energie angelegt ist, kannst du einmal während deines Zuges (vor deinem Angriff) 50 Schadenspunkte bei diesem Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Elemental Feather",
				'fr-fr': "Plume Élémentaire",
				'es-es': "Pluma Elemental",
				'it-it': "Piuma Elemento",
				'pt-br': "Pluma Elemental",
				'de-de': "Elementare Feder"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 288296,
		tcgplayer: 111643
	}
}

export default card
