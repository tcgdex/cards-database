import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [906],
	set: Set,

	name: {
		'en-us': "Sprigatito ex",
		'fr-fr': "Poussacha-ex",
		'es-es': "Sprigatito ex",
		'it-it': "Sprigatito-ex",
		'pt-br': "Sprigatito ex",
		'de-de': "Felori-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Magical Leaf",
			'fr-fr': "Feuille Magik",
			'es-es': "Hoja Mágica",
			'it-it': "Fogliamagica",
			'pt-br': "Folha Mágica",
			'de-de': "Zauberblatt"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
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
	suffix: "ex",
	illustrator: "takuyoa",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751812,
				tcgplayer: 542468
			},
		}
	],
}

export default card
