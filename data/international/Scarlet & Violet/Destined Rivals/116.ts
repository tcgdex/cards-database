import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [31],
	set: Set,

	name: {
		'en-us': "Team Rocket's Nidoqueen",
		'fr-fr': "Nidoqueen de la Team Rocket",
		'de-de': "Team Rockets Nidoqueen",
		'it-it': "Nidoqueen del Team Rocket",
		'es-es': "Nidoqueen del Team Rocket",
		'pt-br': "Nidoqueen da Equipe Rocket",
		'es-mx': "Nidoqueen del Equipo Rocket"
	},


	illustrator: "hncl",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Team Rocket's Nidorina",
		'fr-fr': "Nidorina de la Team Rocket",
		'de-de': "Team Rockets Nidorina",
		'it-it': "Nidorina del Team Rocket",
		'es-es': "Nidorina del Team Rocket",
		'pt-br': "Nidorina da Equipe Rocket",
		'es-mx': "Nidorina del Equipo Rocket"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Love Impact",
			'fr-fr': "Impact de l'Amour",
			'de-de': "Einschlag der Liebe",
			'it-it': "Impatto Amoroso",
			'es-es': "Impacto Amoroso",
			'pt-br': "Impacto de Amor",
			'es-mx': "Impacto Amoroso"
		},

		effect: {
			'en-us': "If a Pokémon that has \"Nidoking\" in its name is on your Bench, this attack does 120 more damage.",
			'fr-fr': "Si un Pokémon ayant \" Nidoking \" dans son nom est sur votre Banc, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn sich ein Pokémon auf deiner Bank befindet, bei dem \"Nidoking\" zum Namen gehört, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se un Pokémon che ha \"Nidoking\" nel nome è nella tua panchina, questo attacco infligge 120 danni in più.",
			'es-es': "Si hay un Pokémon en tu Banca que tenga \"Nidoking\" en su nombre, este ataque hace 120 puntos de daño más.",
			'pt-br': "Se um Pokémon que tiver \"Nidoking\" em seu nome estiver no seu Banco, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si hay un Pokémon en tu Banca que tenga \"Nidoking\" en su nombre, este ataque hace 120 puntos de daño más."
		},

		damage: "60+"
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Mega Kick",
			'fr-fr': "Ultimawashi",
			'de-de': "Megakick",
			'it-it': "Megacalcio",
			'es-es': "Megapatada",
			'pt-br': "Megachute",
			'es-mx': "Megapatada"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825990,
				tcgplayer: 632924
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825990,
				tcgplayer: 632924
			}
		},
	],
}

export default card
