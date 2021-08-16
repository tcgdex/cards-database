import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Buzzwole GX",
		fr: "Câblifère GX",
		es: "Buzzwole GX",
		it: "Buzzwole GX",
		pt: "Buzzwole GX",
		de: "Masskito GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		794,
	],

	hp: 190,

	types: [
		"Fighting",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Jet Punch",
				fr: "Coup Rapide",
				es: "Puño Propulsión",
				it: "Pugno Jet",
				pt: "Soco Jato",
				de: "Jet-Schlag"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Knuckle Impact",
				fr: "Coup d’Articulations",
				es: "Impacto Nudillo",
				it: "Impatto Nocche",
				pt: "Impacto Ossudo",
				de: "Knöchelprall"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 160,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Absorption GX",
				fr: "Expansion GX",
				es: "Expansión GX",
				it: "Expansio GX",
				pt: "Expansão GX",
				de: "Expander GX"
			},
			effect: {
				en: "This attack does 40 damage for each of your remaining Prize cards. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 40 dégâts pour chacune des cartes Récompense qu’il vous reste. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 40 puntos de daño por cada carta de Premio que te quede. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 40 danni per ogni carta Premio che ti resta. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 40 pontos de dano para cada uma das suas cartas de Prêmio restantes (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 40 Schadenspunkte mal der Anzahl deiner verbleibenden Preiskarten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2
}

export default card
