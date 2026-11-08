import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Buzzwole GX",
		'fr-fr': "Mouscoto GX",
		'es-es': "Buzzwole GX",
		'it-it': "Buzzwole GX",
		'pt-br': "Buzzwole GX",
		'de-de': "Masskito GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				'en-us': "Jet Punch",
				'fr-fr': "Coup Rapide",
				'es-es': "Puño Propulsión",
				'it-it': "Pugno Jet",
				'pt-br': "Soco Jato",
				'de-de': "Jet-Schlag"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				'en-us': "Knuckle Impact",
				'fr-fr': "Coup d’Articulations",
				'es-es': "Impacto Nudillo",
				'it-it': "Impatto Nocche",
				'pt-br': "Impacto Ossudo",
				'de-de': "Knöchelprall"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
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
				'en-us': "Absorption GX",
				'fr-fr': "Expansion-GX",
				'es-es': "Expansión GX",
				'it-it': "Expansio-GX",
				'pt-br': "Expansão GX",
				'de-de': "Expander GX"
			},
			effect: {
				'en-us': "This attack does 40 damage for each of your remaining Prize cards. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 40 dégâts pour chacune des cartes Récompense qu’il vous reste. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 40 puntos de daño por cada carta de Premio que te quede. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 40 danni per ogni carta Premio che ti resta. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 40 pontos de dano para cada uma das suas cartas de Prêmio restantes (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 40 Schadenspunkte mal der Anzahl deiner verbleibenden Preiskarten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	retreat: 2,

	thirdParty: {
		cardmarket: 311951,
		tcgplayer: 149132
	}
}

export default card
