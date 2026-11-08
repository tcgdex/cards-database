import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sprigatito ex",
		'fr-fr': "Poussacha-ex",
		'es-es': "Sprigatito ex",
		'es-mx': "Sprigatito ex",
		'de-de': "Felori-ex",
		'it-it': "Sprigatito-ex",
		'pt-br': "Sprigatito ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [906],
	hp: 200,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'es-mx': "Arañazo",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Magical Leaf",
			'fr-fr': "Feuille Magik",
			'es-es': "Hoja Mágica",
			'es-mx': "Hojas Mágicas",
			'de-de': "Zauberblatt",
			'it-it': "Fogliamagica",
			'pt-br': "Folha Mágica"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon."
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
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869862,
				tcgplayer: 676063
			}
		}
	],
}

export default card
