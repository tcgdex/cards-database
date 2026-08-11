import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [97],
	set: Set,

	name: {
		'en-us': "Team Rocket's Hypno",
		'fr-fr': "Hypnomade de la Team Rocket",
		'de-de': "Team Rockets Hypno",
		'it-it': "Hypno del Team Rocket",
		'es-es': "Hypno del Team Rocket",
		'pt-br': "Hypno da Equipe Rocket",
		'es-mx': "Hypno del Equipo Rocket"
	},


	illustrator: "Yuya Oka",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Team Rocket's Drowzee",
		'fr-fr': "Soporifik de la Team Rocket",
		'de-de': "Team Rockets Traumato",
		'it-it': "Drowzee del Team Rocket",
		'es-es': "Drowzee del Team Rocket",
		'pt-br': "Drowzee da Equipe Rocket",
		'es-mx': "Drowzee del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'de-de': "Psychoschuss",
			'it-it': "Psicosparo",
			'es-es': "Disparo Psi",
			'pt-br': "Tiro Psíquico",
			'es-mx': "Psicodisparo"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			'en-us': "Bench Manipulation",
			'fr-fr': "Manipulation de Banc",
			'de-de': "Bankmanipulation",
			'it-it': "Psicomanipolazione",
			'es-es': "Manipulación de Banca",
			'pt-br': "Manipulação de Banco",
			'es-mx': "Manipulación de Banca"
		},

		effect: {
			'en-us': "Your opponent flips a coin for each of their Benched Pokémon. This attack does 80 damage to your opponent's Active Pokémon for each tails. This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Votre adversaire lance une pièce pour chacun de ses Pokémon de Banc. Cette attaque inflige 80 dégâts au Pokémon Actif de votre adversaire pour chaque côté pile. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'de-de': "Dein Gegner wirft 1 Münze für jedes Pokémon auf seiner Bank. Diese Attacke fügt dem Aktiven Pokémon deines Gegners 80 Schadenspunkte pro Zahl zu. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			'it-it': "Il tuo avversario lancia una moneta per ogni Pokémon nella sua panchina. Questo attacco infligge 80 danni al Pokémon attivo del tuo avversario ogni volta che esce croce. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			'es-es': "Tu rival lanza 1 moneda por cada uno de sus Pokémon en Banca. Este ataque hace 80 puntos de daño al Pokémon Activo de tu rival por cada cruz. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'pt-br': "Seu oponente joga uma moeda para cada um dos Pokémon no Banco dele. Este ataque causa 80 pontos de dano ao Pokémon Ativo do seu oponente para cada coroa. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'es-mx': "Tu rival lanza 1 moneda por cada uno de sus Pokémon en Banca. Este ataque hace 80 puntos de daño al Pokémon Activo de tu rival por cada cruz. El daño de este ataque no se ve afectado por Debilidad o Resistencia."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825954,
				tcgplayer: 632890
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825954,
				tcgplayer: 632890
			}
		},
	],
}

export default card
