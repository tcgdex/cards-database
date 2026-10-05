import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [939],
	set: Set,

	name: {
		en: "Bellibolt",
		fr: "Ampibidou",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	evolveFrom: {
		en: "Tadbulb",
		fr: "Têtampoule",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Wave",
			fr: "Cage Éclair",
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Two-Bump Bolt",
			fr: "Éclair Double-Choc",
		},

		effect: {
			en: "You may discard up to 2 {L} Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 2 Énergies {L} de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
	illustrator: "Mizue",
	description: {
		en: "When this Pokémon expands and contracts its wobbly body, the belly-button dynamo in its stomach produces a huge amount of electricity.",
		fr: "Lorsque ce Pokémon allonge et contracte son corps élastique, son nombril-dynamo produit une quantité d'électricité colossale.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 751815,
				tcgplayer: 544194
			},
		}
	],
}

export default card
