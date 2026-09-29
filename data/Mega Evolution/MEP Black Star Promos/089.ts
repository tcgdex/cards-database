import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Zeraora ex",
		fr: "Méga-Zeraora-ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [807],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunderous Fist",
			fr: "Poing Foudroyant",
		},

		effect: {
			en: "This attack does 60 damage for each {L} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie {L} attachée à ce Pokémon.",
		},

		damage: "60×"
	},
	{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Zepto Turn",
			fr: "Zepto Tour",
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 903672,
				tcgplayer: 710754
			}
		}
	],
}

export default card
