import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [417],
	set: Set,

	name: {
		en: "Pachirisu",
		es: "Pachirisu",
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
			es: "Carga Chispeante",
		},

		effect: {
			en: "Flip 3 coins. Attach a number of Basic {L} Energy cards up to the number of heads from your discard pile to your Benched Pokémon in any way you like.",
			es: "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de cartas de Energía {L} Básica igual o inferior al número de caras que te hayan salido y únelas a tus Pokémon en Banca de la manera que desees.",
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Bolt",
			es: "Relampaguito",
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
