import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [194],
	set: Set,
	cameoDexIds: [116],

	name: {
		en: "Wooper",
		fr: "Axoloto",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Scoop Water",
			fr: "Écope Eau",
		},

		effect: {
			en: "Shuffle up to 3 Basic {W} Energy cards from your discard pile into your deck.",
			fr: "Mélangez jusqu'à 3 cartes Énergie {W} de base de votre pile de défausse avec votre deck.",
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Saboteri",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 796925,
				tcgplayer: 594389
			},
		}
	],
}

export default card
