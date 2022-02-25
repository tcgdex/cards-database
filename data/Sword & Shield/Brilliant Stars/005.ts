import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		it: "Tropius",
		pt: "Tropius",
		de: "Tropius"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Curative Bower",
			fr: "Charmille Curative",
			es: "Ramaje Curativo",
			it: "Curapergola",
			pt: "Recanto Curativo",
			de: "Heilende Laube"
		},

		effect: {
			en: "All of your Pokémon that have Grass Energy attached can't be Confused, and if they are already Confused, they recover from that Special Condition.",
			fr: "Tous vos Pokémon auxquels de l'Énergie Grass est attachée ne peuvent pas être Confus, et s'ils le sont déjà, ils guérissent de cet État Spécial.",
			es: "Ninguno de tus Pokémon que tenga alguna Energía Grass unida a él puede pasar a estar Confundido, y, si ya está Confundido, se recupera de esa Condición Especial.",
			it: "Tutti i tuoi Pokémon che hanno delle Energie Grass assegnate non possono venire confusi e, se sono già confusi, guariscono da quella condizione speciale.",
			pt: "Todos os seus Pokémon que tenham Energia Grass ligada a eles não podem ficar Confusos, e se eles já estiverem Confusos, eles se recuperarão daquela Condição Especial.",
			de: "Alle deine Pokémon, an die Grass-Energie angelegt ist, können nicht verwirrt werden, und wenn sie bereits verwirrt sind, erholen sie sich von jenem Speziellen Zustand."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
			es: "Cuchilla Cortante",
			it: "Affettalama",
			pt: "Lâmina Fatiante",
			de: "Schwertschneide"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card