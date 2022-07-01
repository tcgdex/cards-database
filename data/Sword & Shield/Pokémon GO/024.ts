import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno",
		fr: "Artikodin",
		es: "Articuno",
		it: "Articuno",
		pt: "Articuno",
		de: "Arktos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ice Symbol",
			fr: "Symbole Glaçant",
			es: "Símbolo Hielo",
			it: "Simbolo Ghiacciato",
			pt: "Símbolo de Gelo",
			de: "Eis-Symbol"
		},

		effect: {
			en: "Your Basic Water Pokémon's attacks, except any Articuno, do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Water de base, à l'exception de celles d'un Artikodin, infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de tus Pokémon Water Básicos, excepto de los Articuno, hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi dei tuoi Pokémon Base Water, a eccezione di qualsiasi Articuno, infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques dos seus Pokémon Water Básicos, exceto por quaisquer Articuno, causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken deiner Basis-Water-Pokémon, außer Arktos, fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Freezing Wind",
			fr: "Vent Glaçant",
			es: "Viento Gélido",
			it: "Ventogelido",
			pt: "Vento Gelado",
			de: "Polarwind"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card