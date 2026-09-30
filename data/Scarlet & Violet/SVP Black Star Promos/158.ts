import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [417],
	set: Set,

	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Crackling Charge",
			fr: "Charge Crépitante",
		},

		effect: {
			en: "Flip 3 coins. Attach a number of Basic {L} Energy cards up to the number of heads from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Lancez 3 pièces. Attachez à vos Pokémon de Banc un nombre de cartes Énergie {L} de base de votre pile de défausse inférieur ou égal au nombre de côtés face obtenus, comme il vous plaît.",
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Bolt",
			fr: "Foudre Minuscule",
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Yuya Oka",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 796932,
				tcgplayer: 594410
			},
		}
	],
}

export default card
