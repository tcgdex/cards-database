import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		en: "Moltres",
		fr: "Sulfura",
		es: "Moltres",
		it: "Moltres",
		pt: "Moltres",
		de: "Lavados"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flare Symbol",
			fr: "Symbole Flamboyant",
			es: "Símbolo Llama",
			it: "Simbolo Fiammeggiante",
			pt: "Símbolo de Labareda",
			de: "Feuer-Symbol"
		},

		effect: {
			en: "Your Basic Fire Pokémon's attacks, except any Moltres, do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Fire de base, à l'exception de celles d'un Sulfura, infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de tus Pokémon Fire Básicos, excepto de los Moltres, hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi dei tuoi Pokémon Base Fire, a eccezione di qualsiasi Moltres, infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques dos seus Pokémon Fire Básicos, exceto por quaisquer Moltres, causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken deiner Basis-Fire-Pokémon, außer Lavados, fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
			es: "Ala Ígnea",
			it: "Alafiamma",
			pt: "Asa de Fogo",
			de: "Feuerflügel"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card
