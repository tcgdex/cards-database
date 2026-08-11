import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [357],
	set: Set,

	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'es-es': "Tropius",
		'it-it': "Tropius",
		'pt-br': "Tropius",
		'de-de': "Tropius"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Curative Bower",
			'fr-fr': "Charmille Curative",
			'es-es': "Ramaje Curativo",
			'it-it': "Curapergola",
			'pt-br': "Recanto Curativo",
			'de-de': "Heilende Laube"
		},

		effect: {
			'en-us': "All of your Pokémon that have Grass Energy attached can't be Confused, and if they are already Confused, they recover from that Special Condition.",
			'fr-fr': "Tous vos Pokémon auxquels de l'Énergie Grass est attachée ne peuvent pas être Confus, et s'ils le sont déjà, ils guérissent de cet État Spécial.",
			'es-es': "Ninguno de tus Pokémon que tenga alguna Energía Grass unida a él puede pasar a estar Confundido, y, si ya está Confundido, se recupera de esa Condición Especial.",
			'it-it': "Tutti i tuoi Pokémon che hanno delle Energie Grass assegnate non possono venire confusi e, se sono già confusi, guariscono da quella condizione speciale.",
			'pt-br': "Todos os seus Pokémon que tenham Energia Grass ligada a eles não podem ficar Confusos, e se eles já estiverem Confusos, eles se recuperarão daquela Condição Especial.",
			'de-de': "Alle deine Pokémon, an die Grass-Energie angelegt ist, können nicht verwirrt werden, und wenn sie bereits verwirrt sind, erholen sie sich von jenem Speziellen Zustand."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Slicing Blade",
			'fr-fr': "Lame Tranchante",
			'es-es': "Cuchilla Cortante",
			'it-it': "Affettalama",
			'pt-br': "Lâmina Fatiante",
			'de-de': "Schwertschneide"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Bunches of delicious fruit grow around its neck. In warm areas, many ranches raise Tropius.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608429,
				tcgplayer: 263585
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608429,
				tcgplayer: 263585
			}
		},
	],
}

export default card
