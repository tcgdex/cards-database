import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		'en-us': "Hisuian Electrode",
		'fr-fr': "Électrode de Hisui",
		'es-es': "Electrode de Hisui",
		'it-it': "Electrode di Hisui",
		'pt-br': "Electrode de Hisui",
		'de-de': "Hisui-Lektrobal"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Hisuian Voltorb",
		'fr-fr': "Voltorbe de Hisui",
		'es-es': "Voltorb de Hisui",
		'it-it': "Voltorb di Hisui",
		'pt-br': "Voltorb de Hisui",
		'de-de': "Hisui-Voltobal"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Triple Draw",
			'fr-fr': "Triple Pioche",
			'es-es': "Triple Robo",
			'it-it': "Pescata Tripla",
			'pt-br': "Compra Tripla",
			'de-de': "Dreifachzug"
		},

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'es-es': "Roba 3 cartas.",
			'it-it': "Pesca tre carte.",
			'pt-br': "Compre 3 cartas.",
			'de-de': "Ziehe 3 Karten."
		}
	}, {
		name: {
			'en-us': "Irritated Bomb",
			'fr-fr': "Bombe Agacée",
			'es-es': "Bomba Enojada",
			'it-it': "Irritabomba",
			'pt-br': "Bomba Irritada",
			'de-de': "Gereizte Bombe"
		},

		damage: 50
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
		'en-us': "The tissue on the surface of its body is curiously similar in composition to an Apricorn. When irritated, this Pokémon lets loose an electric current equal to 20 lightning bolts.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658489,
				tcgplayer: 272203
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658489,
				tcgplayer: 272203
			}
		},
	],
}

export default card
