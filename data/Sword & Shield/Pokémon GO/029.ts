import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		en: "Zapdos",
		fr: "Électhor",
		es: "Zapdos",
		it: "Zapdos",
		pt: "Zapdos",
		de: "Zapdos"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lightning Symbol",
			fr: "Symbole Foudroyant",
			es: "Símbolo Relámpago",
			it: "Simbolo Fulminante",
			pt: "Símbolo de Relâmpago",
			de: "Elektro-Symbol"
		},

		effect: {
			en: "Your Basic Lightning Pokémon's attacks, except any Zapdos, do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Lightning de base, à l'exception de celles d'un Électhor, infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de tus Pokémon Lightning Básicos, excepto de los Zapdos, hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi dei tuoi Pokémon Base Lightning, a eccezione di qualsiasi Zapdos, infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques dos seus Pokémon Lightning Básicos, exceto por quaisquer Zapdos, causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken deiner Basis-Lightning-Pokémon, außer Zapdos, fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
			es: "Bola Eléctrica",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			de: "Stromball"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664568
	}
}

export default card
