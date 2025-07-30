import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Nidoqueen",
		fr: "Nidoqueen de la Team Rocket",
		de: "Team Rockets Nidoqueen",
		it: "Nidoqueen del Team Rocket",
		es: "Nidoqueen del Team Rocket",
		pt: "Nidoqueen da Equipe Rocket",
		'es-mx': "Nidoqueen del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Love Impact",
			fr: "Impact de l'Amour",
			de: "Einschlag der Liebe",
			it: "Impatto Amoroso",
			es: "Impacto Amoroso",
			pt: "Impacto de Amor",
			'es-mx': "Impacto Amoroso"
		},

		effect: {
			en: "If a Pokémon that has \"Nidoking\" in its name is on your Bench, this attack does 120 more damage.",
			fr: "Si un Pokémon ayant \" Nidoking \" dans son nom est sur votre Banc, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn sich ein Pokémon auf deiner Bank befindet, bei dem \"Nidoking\" zum Namen gehört, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se un Pokémon che ha \"Nidoking\" nel nome è nella tua panchina, questo attacco infligge 120 danni in più.",
			es: "Si hay un Pokémon en tu Banca que tenga \"Nidoking\" en su nombre, este ataque hace 120 puntos de daño más.",
			pt: "Se um Pokémon que tiver \"Nidoking\" em seu nome estiver no seu Banco, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si hay un Pokémon en tu Banca que tenga \"Nidoking\" en su nombre, este ataque hace 120 puntos de daño más."
		},

		damage: "60+"
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Mega Kick",
			fr: "Ultimawashi",
			de: "Megakick",
			it: "Megacalcio",
			es: "Megapatada",
			pt: "Megachute",
			'es-mx': "Megapatada"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card