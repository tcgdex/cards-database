import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		it: "Koraidon",
		pt: "Koraidon",
		de: "Koraidon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Unrelenting Onslaught",
			fr: "Assauts Incessants",
			es: "Arremetida Incesante",
			it: "Offensiva Incessante",
			pt: "Arrancada Implacável",
			de: "Unerbittlicher Ansturm"
		},

		effect: {
			en: "If 1 of your other Ancient Pokémon used an attack during your last turn, this attack does 150 more damage.",
			fr: "Si l'un de vos autres Pokémon Temps passé a utilisé une attaque pendant votre dernier tour, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Si uno de tus otros Pokémon del pasado usó un ataque durante tu último turno, este ataque hace 150 puntos de daño más.",
			it: "Se uno dei tuoi altri Pokémon Tempo Passato ha usato un attacco durante il tuo ultimo turno, questo attacco infligge 150 danni in più.",
			pt: "Se 1 dos seus outros Pokémon Ancestrais usou um ataque durante o seu último turno, este ataque causará 150 pontos de dano a mais.",
			de: "Wenn 1 deiner anderen Pokémon aus der Vergangenheit während deines letzten Zuges eine Attacke eingesetzt hat, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Ryuta Fuse",

	thirdParty: {
		cardmarket: 794455
	}
}

export default card
