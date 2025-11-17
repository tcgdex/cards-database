import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [319],
	set: Set,

	name: {
		fr: "Sharpedo",
		en: "Sharpedo",
		es: "Sharpedo",
		it: "Sharpedo",
		pt: "Sharpedo",
		de: "Tohaido"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		fr: "Carvanha",
		en: "Carvanha",
		es: "Carvanha",
		it: "Carvanha",
		pt: "Carvanha",
		de: "Kanivanha"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Impact Aqua",
			en: "Aqua Impact",
			es: "Impacto Aqua",
			it: "Acquimpatto",
			pt: "Impacto Aqua",
			de: "Aqua-Einschlag"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			es: "Este ataque hace 30 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Water", "Water"],

		name: {
			fr: "Bélier Volant",
			en: "Jet Headbutt",
			es: "Turbocabezazo",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato",
			de: "Flinke Kopfnuss"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tonji Matsuno",

	thirdParty: {
		cardmarket: 725127
	}
}

export default card