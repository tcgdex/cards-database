import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,
	cameoDexIds: [25],

	name: {
		en: "Drifloon",
		es: "Drifloon",
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [425],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Pull",
			es: "Tirar",
		},

		effect: {
			en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
		}
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 851051,
				tcgplayer: 656255
			}
		},
	],
}

export default card
