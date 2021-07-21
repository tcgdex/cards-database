import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
		es: "Wishiwashi",
		it: "Wishiwashi",
		pt: "Wishiwashi",
		de: "Lusardin"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		746,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Schooling",
				fr: "Banc",
				es: "Banco",
				it: "Banco",
				pt: "Cardume",
				de: "Fischschwarm"
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch this Pokémon with a Wishiwashi GX in your hand. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque),vous pouvez échanger ce Pokémon avec un Froussardine GX dans votre main. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes cambiar este Pokémon por un Wishiwashi GX de tu mano. Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare questo Pokémon con un Wishiwashi GX nella tua mano. Le carte assegnate, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode trocar este Pokémon por 1 Wishiwashi GX na sua mão. Quaisquer cartas ligadas, contadores de dano, Condições Especiais, vezes em jogo e quaisquer outros efeitos permanecem no novo Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dieses Pokémon gegen 1 Lusardin GX auf deiner Hand austauschen. Alle an es angelegten Karten, Schadensmarken, Speziellen Zustände, Spielzüge sowie alle anderen Effekte verbleiben auf dem neuen Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sharpshooting",
				fr: "Tir de Précision",
				es: "Tirador Certero",
				it: "Tiratore Scelto",
				pt: "Tiro Preciso",
				de: "Scharfschuss"
			},
			effect: {
				en: "This attack does 10 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
