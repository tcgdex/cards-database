import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Passimian",
		fr: "Quartermac",
		es: "Passimian",
		it: "Passimian",
		pt: "Passimian",
		de: "Quartermak"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Throwing Coach",
			fr: "Entraînement au Lancer",
			es: "Entrenador de Lanzamiento",
			it: "Istruttore di Tiro",
			pt: "Treinador de Arremesso",
			de: "Wurftrainer"
		},

		effect: {
			en: "Your Rapid Strike Pokémon’s attacks do 30 more damage to your opponent’s Benched Pokémon V and Benched Pokémon-GX (before applying Weakness and Resistance). You can’t apply more than 1 Throwing Coach Ability at a time.",
			fr: "Les attaques de vos Pokémon Mille Poings infligent 30 dégâts supplémentaires aux Pokémon-V de Banc et Pokémon-GX de Banc de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu’un talent Entraînement au Lancer à la fois.",
			es: "Los ataques de tus Pokémon Golpe Fluido hacen 30 puntos de daño más a los Pokémon V en Banca y Pokémon-GX en Banca de tu rival (antes de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Entrenador de Lanzamiento a la vez.",
			it: "Gli attacchi dei tuoi Pokémon Colpo Rapido infliggono 30 danni in più ai Pokémon-V e ai Pokémon-GX nella panchina del tuo avversario, prima di aver applicato debolezza e resistenza. Non puoi applicare più di un’abilità Istruttore di Tiro alla volta.",
			pt: "Os ataques dos seus Pokémon Golpe Fluido causam 30 pontos de dano a mais aos Pokémon V e Pokémon-GX no Banco do seu oponente (antes de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Treinador de Arremesso por vez.",
			de: "Die Attacken deiner Fließender-Angriff-Pokémon fügen den Pokémon-V und Pokémon-GX auf der Bank deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Du kannst immer nur jeweils 1 Fähigkeit Wurftrainer einsetzen."
		}
	}],

	attacks: [{
		name: {
			en: "Fling",
			fr: "Dégommage",
			es: "Lanzamiento",
			it: "Lancio",
			pt: "Arremessar",
			de: "Schleuder"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Passimian live in groups of about 20, with each member performing an assigned role. Through cooperation, the group survives."
	}
}

export default card