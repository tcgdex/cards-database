import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		en: "Raikou",
		fr: "Raikou",
		de: "Raikou",
		it: "Raikou",
		es: "Raikou",
		pt: "Raikou",
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
			en: "Voltaic Bullet",
			fr: "Projectile Voltaïque"
		},

		damage: 60,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "This attack also does 10 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 10 dégâts à un des Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
}

export default card