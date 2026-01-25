import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu V-UNION",
		fr: "Pikachu V-UNION",
		de: "Pikachu V-UNION",
		es: "Pikachu V-UNIÓN",
		pt: "Pikachu V-UNIÃO",
		it: "Pikachu V UNIONE"
	},

	rarity: "None",
	category: "Pokemon",
	stage: "V-UNION",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Union Gain",
			fr: "Gain Union"
		},

		effect: {
			en: "Attach up to 2 Lightning Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie  de votre pile de défausse à ce Pokémon."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Shocking Shock",
			fr: "Choc Choquant"
		},

		damage: 120,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Disconnect",
			fr: "Déconnexion"
		},

		damage: 150,

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electro Ball Together",
			fr: "Boule Élek Groupée"
		},

		damage: 250
	}],

	regulationMark: "E",
	suffix: "V",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	hp: 300,
	types: ["Lightning"],
	retreat: 0,

	thirdParty: {
		cardmarket: 576738
	}
}

export default card
