import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [541],
	set: Set,

	name: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
		es: "Sewaddle",
		it: "Sewaddle",
		pt: "Sewaddle",
		de: "Strawickl"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		en: "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Trip Over",
			fr: "Croche-Pied",
			de: "Stolperer",
			es: "Tropezón",
			pt: "Tropeção",
			it: "Inciampare"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			de: "Samenbomben",
			es: "Bomba Germen",
			pt: "Bomba de Sementes",
			it: "Semebomba"
		},

		damage: 60
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582038,
		tcgplayer: 253080
	}
}

export default card