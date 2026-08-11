import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'en-us': "Raikou",
		'fr-fr': "Raikou",
		'de-de': "Raikou",
		'it-it': "Raikou",
		'es-es': "Raikou",
		'pt-br': "Raikou",
		'es-mx': "Raikou"
	},

	suffix: "EX",
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",

    hp: 130,
    types: ["Lightning"],
    dexId: [243],

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
			'en-us': "Voltaic Bullet",
			'fr-fr': "Projectile Voltaïque"
		},

		damage: 60,
		cost: ["Lightning", "Lightning"],

		effect: {
			'en-us': "This attack also does 10 damage to 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à un des Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
}

export default card