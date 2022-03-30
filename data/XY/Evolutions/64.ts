import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Pidgeot EX",
		fr: "Roucarnage EX",
		es: "Pidgeot EX",
		it: "Pidgeot EX",
		pt: "Pidgeot EX",
		de: "Tauboss EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mirror Move",
				fr: "Mimique",
				es: "Movimiento Espejo",
				it: "Speculmossa",
				pt: "Ataque Espelhado",
				de: "Spiegeltrick"
			},
			effect: {
				en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does the same amount of damage to your opponent's Active Pokémon.",
				fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige la même quantité de dégâts au Pokémon Actif de votre adversaire.",
				es: "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace el mismo número de puntos de daño al Pokémon Activo de tu rival.",
				it: "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge la stessa quantità di danni al Pokémon attivo del tuo avversario.",
				pt: "Se este Pokémon foi danificado por um ataque na última vez de jogar do seu oponente, esse ataque causará a mesma quantidade de danos ao Pokémon Ativo do seu oponente.",
				de: "Falls diesem Pokémon während des letzten Zuges deines Gegners Schaden durch einen Angriff zugefügt wurde, fügt dieser Angriff dem Aktiven Pokémon deines Gegners genauso viel Schaden zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feather Lance",
				fr: "Lance Plume",
				es: "Lanza Pluma",
				it: "Lancia Piumata",
				pt: "Lança de Penas",
				de: "Federlanze"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,
	stage: "Basic"
}

export default card
