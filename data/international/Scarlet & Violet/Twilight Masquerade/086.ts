import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [669],
	set: Set,

	name: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'pt-br': "Flabébé",
		'de-de': "Flabébé"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bind Wound",
			'fr-fr': "Blessure Pansée",
			'es-es': "Vendar Herida",
			'it-it': "Cura Ferite",
			'pt-br': "Ligar Ferida",
			'de-de': "Wunden verbinden"
		},

		effect: {
			'en-us': "Heal 30 damage from 1 of your Pokémon.",
			'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon.",
			'es-es': "Cura 30 puntos de daño a uno de tus Pokémon.",
			'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'it-it': "Vento di Fata",
			'pt-br': "Vento de Fada",
			'de-de': "Feenbrise"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This Flabébé rides a red flower. Immediately after birth, this Pokémon begins flying around in search of a flower it likes.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769260,
				tcgplayer: 550130
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769260,
				tcgplayer: 550130
			}
		},
	],

	illustrator: "Yukiko Baba",

}

export default card