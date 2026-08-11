import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'es-es': "Suicune",
		'it-it': "Suicune",
		'pt-br': "Suicune",
		'de-de': "Suicune"
	},

	suffix: "EX",
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",

    hp: 140,
    types: ["Water"],
    dexId: [245],

    stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Legendary Pulse",
			'fr-fr': "Battement Légendaire"
		},

		effect: {
			'en-us': "At the end of your turn, if this Pokémon is in the Active Spot, draw a card.",
			'fr-fr': "À la fin de votre tour, si ce Pokémon est sur le Poste Actif, piochez une carte."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Crystal Waltz",
			'fr-fr': "Valse de Cristal"
		},

		damage: 20,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "This attack does 20 damage for each Benched Pokémon (both yours and your opponent's).",
			'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card