import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Ho-Oh EX",
		fr: "Ho-Oh EX",
		es: "Ho-Oh EX",
		it: "Ho-Oh EX",
		pt: "Ho-Oh EX",
		de: "Ho-Oh EX"
	},

	illustrator: "Eske Yoshinob",
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
				en: "Purifying Fire",
				fr: "Feu Purifiant",
				es: "Fuego Purificador",
				it: "Purifiamma",
				pt: "Fogo Purificador",
				de: "Reinigendes Feuer"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon has any basic Fire Energy attached to it, you may heal 50 damage from it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si de l'Énergie Fire de base est attachée à ce Pokémon, vous pouvez soigner 50 dégâts à ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon tiene alguna Energía Fire Básica unida a él, puedes curarle 50 puntos de daño.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon ha delle Energie base Fire assegnate, puoi curarlo da 50 danni.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon tiver alguma Energia Fire básica ligada a ele, você poderá curar 50 de danos dele.",
				de: "Wenn an dieses Pokémon bereits mindestens 1 Fire-Basis-Energie angelegt ist, kannst du einmal während deines Zuges (vor deinem Angriff) 50 Schadenspunkte bei diesem Pokémon heilen."
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
				en: "Elemental Feather",
				fr: "Plume Élémentaire",
				es: "Pluma Elemental",
				it: "Piuma Elemento",
				pt: "Pluma Elemental",
				de: "Elementare Feder"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
	stage: "Basic"
}

export default card
