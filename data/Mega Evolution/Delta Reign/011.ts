import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Golisopod ex",
		fr: "Méga-Sarmuraï-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [768],
	hp: 340,
	types: ["Grass"],

	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou"
	},

	stage: "Stage1",
	suffix: "ex",

	attacks: [{
		name: {
			en: "Finishing Blow",
			fr: "Coup de Grâce"
		},

		cost: ["Grass"],

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 160 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 160 dégâts supplémentaires."
		},

		damage: "60+"
	}, {
		name: {
			en: "Quadruple Hold",
			fr: "Prise Quadruple"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{ type: "holo" }
	],
}

export default card
