import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,
	cameoDexIds: [25],

	name: {
		en: "Drifblim",
		es: "Drifblim",
	},

	evolveFrom: {
		en: "Drifloon",
		es: "Drifloon",
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [426],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Disruptive Wind",
			es: "Viento Perturbador",
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Balloon Return",
			es: "Regreso Globo",
		},

		damage: 110,

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
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
				cardmarket: 851052,
				tcgplayer: 656256
			}
		},
	],
}

export default card

