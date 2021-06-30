import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Xerneas-GX",
		fr: "Xerneas-GX",
		es: "Xerneas-GX",
		it: "Xerneas-GX",
		pt: "Xerneas-GX",
		de: "Xerneas-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		716,
	],
	hp: 180,
	types: [
		"Fairy",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Overrun",
				fr: "Dépassement",
				es: "Rebasar",
				it: "Oltrepassare",
				pt: "Atropelar",
				de: "Überrennen"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Aurora Horns",
				fr: "Cornes Boréales",
				es: "Cuernos Aurora",
				it: "Corni dell’Aurora",
				pt: "Chifres da Aurora",
				de: "Aurorahörner"
			},

			damage: 120,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Sanctuary GX",
				fr: "Sanctuaire GX",
				es: "Santuario GX",
				it: "Santuario-GX",
				pt: "Santuário GX",
				de: "Refugium GX"
			},
			effect: {
				en: "Move all damage counters from each of your Pokémon to your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Déplacez tous les marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Mueve todos los contadores de daño de cada uno de tus Pokémon al Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Sposta tutti i segnalini danno da ciascuno dei tuoi Pokémon al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Mova todos os contadores de dano de cada um dos seus Pokémon para o Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Verschiebe alle Schadensmarken von jedem deiner Pokémon auf das Aktive Pokémon deines Gegners. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
