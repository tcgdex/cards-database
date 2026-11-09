import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Groudon",
		fr: "Groudon",
		de: "Groudon",
		es: "Groudon",
		it: "Groudon",
		pt: "Groudon",
		'es-mx': "Groudon"
	},

	illustrator: "Nisota Niso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Strength",
			fr: "Force",
			de: "Stärke",
			es: "Fuerza",
			it: "Forza",
			pt: "Força",
			'es-mx': "Fuerza"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			en: "Brutal Lands",
			fr: "Terres Brutales",
			de: "Brutales Land",
			es: "Tierras Brutales",
			it: "Terre Spietate",
			pt: "Terra Brutal",
			'es-mx': "Tierras Brutales"
		},

		effect: {
			en: "If a Stadium that has \"Legendary\" in its name is in play, this attack does 170 more damage.",
			fr: "Si un Stade ayant \" Légendaire \" dans son nom est en jeu, cette attaque inflige 170 dégâts supplémentaires.",
			de: "Wenn ein Stadion im Spiel ist, bei dem \"Legendär\" zum Namen gehört, fügt diese Attacke 170 Schadenspunkte mehr zu.",
			es: "Si hay un Estadio en juego que tenga \"Legendario\" en su nombre, este ataque hace 170 puntos de daño más.",
			it: "Se c'è una carta Stadio in gioco che ha \"Leggendario\" o \"Leggendaria\" nel nome, questo attacco infligge 170 danni in più.",
			pt: "Se um Estádio que tem \"Lendário\" em seu nome estiver em jogo, este ataque causará 170 pontos de dano a mais.",
			'es-mx': "Si hay un Estadio en juego que tenga \"Legendario\" en su nombre, este ataque hace 170 puntos de daño más."
		},

		damage: "100+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	thirdParty: {
		tcgplayer: 726529,
		cardmarket: 918876
	}
}

export default card