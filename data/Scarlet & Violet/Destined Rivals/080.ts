import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Hypno",
		fr: "Hypnomade de la Team Rocket",
		de: "Team Rockets Hypno",
		it: "Hypno del Team Rocket",
		es: "Hypno del Team Rocket",
		pt: "Hypno da Equipe Rocket",
		'es-mx': "Hypno del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			de: "Psychoschuss",
			it: "Psicosparo",
			es: "Disparo Psi",
			pt: "Tiro Psíquico",
			'es-mx': "Psicodisparo"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			en: "Bench Manipulation",
			fr: "Manipulation de Banc",
			de: "Bankmanipulation",
			it: "Psicomanipolazione",
			es: "Manipulación de Banca",
			pt: "Manipulação de Banco",
			'es-mx': "Manipulación de Banca"
		},

		effect: {
			en: "Your opponent flips a coin for each of their Benched Pokémon. This attack does 80 damage to your opponent's Active Pokémon for each tails. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Votre adversaire lance une pièce pour chacun de ses Pokémon de Banc. Cette attaque inflige 80 dégâts au Pokémon Actif de votre adversaire pour chaque côté pile. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			de: "Dein Gegner wirft 1 Münze für jedes Pokémon auf seiner Bank. Diese Attacke fügt dem Aktiven Pokémon deines Gegners 80 Schadenspunkte pro Zahl zu. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			it: "Il tuo avversario lancia una moneta per ogni Pokémon nella sua panchina. Questo attacco infligge 80 danni al Pokémon attivo del tuo avversario ogni volta che esce croce. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			es: "Tu rival lanza 1 moneda por cada uno de sus Pokémon en Banca. Este ataque hace 80 puntos de daño al Pokémon Activo de tu rival por cada cruz. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			pt: "Seu oponente joga uma moeda para cada um dos Pokémon no Banco dele. Este ataque causa 80 pontos de dano ao Pokémon Ativo do seu oponente para cada coroa. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'es-mx': "Tu rival lanza 1 moneda por cada uno de sus Pokémon en Banca. Este ataque hace 80 puntos de daño al Pokémon Activo de tu rival por cada cruz. El daño de este ataque no se ve afectado por Debilidad o Resistencia."
		},

		damage: "80×"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card