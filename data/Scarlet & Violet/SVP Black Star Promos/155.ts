import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [194],
	set: Set,
	cameoDexIds: [116],

	name: {
		en: "Wooper",
		es: "Wooper",
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
			es: "Palada de Agua",
		},

		effect: {
			en: "Shuffle up to 3 Basic {W} Energy cards from your discard pile into your deck.",
			es: "Pon hasta 3 cartas de Energía {W} Básica de tu pila de descartes en tu baraja y barájalas todas.",
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Headbutt",
			es: "Golpe Cabeza",
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
