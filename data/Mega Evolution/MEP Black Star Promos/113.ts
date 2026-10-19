import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Enamorus",
		fr: "Amovénus"
	},

	illustrator: "CHORISO",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [905],
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Incarnate Solidarity",
			fr: "Solidarité d'Avatar"
		},

		effect: {
			en: "If you have Tornadus, Thundurus, Landorus, and Enamorus in play, ignore all {C} Energy in the costs of attacks used by this Pokémon.",
			fr: "Si vous avez Boréas, Fulguris, Démétéros et Amovénus en jeu, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Rising Heart",
			fr: "Cœur Ascendant"
		},

		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 100 dégâts supplémentaires."
		},

		damage: "100+"
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "When it flies to this land from across the sea, the bitter winter comes to an end. According to legend, this Pokémon's love gives rise to the budding of fresh life across Hisui.",
		fr: "Son arrivée par les mers annonce la fin des hivers rigoureux. On raconte que c'est l'amour que ce Pokémon ressent qui fait bourgeonner de nouvelles vies dans la région de Hisui."
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	],
}

export default card
