import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		en: "Entei",
		fr: "Entei",
		es: "Entei",
		'es-mx': "Entei",
		de: "Entei",
		it: "Entei",
		pt: "Entei"
	},

	suffix: "EX",
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",

    hp: 140,
    types: ["Fire"],
    dexId: [244],

    stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Legendary Pulse",
			fr: "Battement Légendaire"
		},

		effect: {
			en: "At the end of your turn, if this Pokémon is in the Active Spot, draw a card.",
			fr: "À la fin de votre tour, si ce Pokémon est sur le Poste Actif, piochez une carte."
		}
	}],

	attacks: [{
		name: {
			en: "Blazing Beatdown",
			fr: "Dérouillée Flamboyante"
		},

		damage: 60,
		cost: ["Fire", "Fire"],

		effect: {
			en: "If this Pokémon has at least 2 extra {R} Energy attached, this attack does 60 more damage.",
			fr: "Si ce Pokémon a au moins 2 Énergies {R} de plus, cette attaque inflige 60 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card