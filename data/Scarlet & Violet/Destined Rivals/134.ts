import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Kingambit",
		fr: "Scalpereur",
		de: "Gladimperio",
		it: "Kingambit",
		es: "Kingambit",
		pt: "Kingambit"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Leadership",
			fr: "Leadership",
			de: "Leadership",
			it: "Leadership",
			es: "Liderato",
			pt: "Liderança"
		},

		effect: {
			en: "Your Basic Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon de base infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			de: "Die Attacken deiner Basis-Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Gli attacchi dei tuoi Pokémon Base infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			es: "Los ataques de tus Pokémon Básicos hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Os ataques dos seus Pokémon Básicos causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Hack At",
			fr: "Entaillage",
			de: "Zerhacken",
			it: "Recisione",
			es: "Machetear",
			pt: "Picotada"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card