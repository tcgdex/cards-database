import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		es: "Pikachu ex.",
	},

	suffix: "ex",
	illustrator: "YOSHIROTTEN",
	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [25],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Zip-Zap Frenzy",
			es: "Frenesí Eléctrico.",
		},

		effect: {
			en: "You may attach any number of Basic Energy cards from your hand to your Pokémon in any way you like.",
			es: "Puedes unir cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
		}
	},
	{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder",
			es: "Trueno",
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a si mismo.",
		},

		damage: 200
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
				cardmarket: 895617,
				tcgplayer: 713256
			}
		}
	],
}

export default card
