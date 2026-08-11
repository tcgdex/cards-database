import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [183],
	set: Set,

	name: {
		'fr-fr': "Marill",
		'en-us': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Vide Bulle",
			'en-us': "Bubble Drain",
			'es-es': "Drenaje Burbujas",
			'it-it': "Assorbibolla",
			'pt-br': "Dreno de Bolha",
			'de-de': "Blasengully"
		},

		effect: {
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'en-us': "Heal 20 damage from this Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715679,
				tcgplayer: 497607,
				cardtrader: 248857
			}
		},
	],

	illustrator: "Atsuya Uki",

	description: {
		'en-us': "The fur on its body naturally repels water. It can stay dry even when it plays in the water.",
	},
}

export default card
