import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [389],
	set: Set,

	name: {
		en: "Torterra",
		fr: "Torterra",
		es: "Torterra",
		it: "Torterra",
		pt: "Torterra",
		de: "Chelterrar"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
		es: "Grotle",
		it: "Grotle",
		pt: "Grotle",
		de: "Chelcarain"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Evopress",
			fr: "Évopress",
			es: "Evopresión",
			it: "Evopressa",
			pt: "Evocompressão",
			de: "Evodruck"
		},

		effect: {
			en: "This attack does 50 damage for each of your Evolution Pokémon in play.",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon Évolutifs en jeu.",
			es: "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon Evolución en juego.",
			it: "Questo attacco infligge 50 danni per ogni tuo Pokémon Evoluzione in gioco.",
			pt: "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon de Evolução em jogo.",
			de: "Diese Attacke fügt für jedes deiner Entwicklungs-Pokémon im Spiel 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 160
	}],

	retreat: 4,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
