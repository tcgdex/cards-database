import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Kingambit",
		fr: "Scalpereur",
		es: "Kingambit",
		it: "Kingambit",
		pt: "Kingambit",
		de: "Gladimperio"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		en: "Bisharp"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Leadership",
			fr: "Leadership",
			es: "Liderato",
			it: "Leadership",
			pt: "Liderança",
			de: "Leadership"
		},

		effect: {
			en: "Your Basic Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon de base infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de tus Pokémon Básicos hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi dei tuoi Pokémon Base infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques dos seus Pokémon Básicos causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken deiner Basis-Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Hack At",
			fr: "Entaillage",
			es: "Machetear",
			it: "Recisione",
			pt: "Picotada",
			de: "Zerhacken"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Anesaki Dynamic",

	variants: {
		normal: false
	}
}

export default card