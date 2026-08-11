import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [465],
	set: Set,

	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'es-es': "Tangrowth",
		'it-it': "Tangrowth",
		'pt-br': "Tangrowth",
		'de-de': "Tangoloss"
	},

	illustrator: "zig",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'es-es': "Tangela",
		'it-it': "Tangela",
		'pt-br': "Tangela",
		'de-de': "Tangela"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Suctioning Vines",
			'fr-fr': "Lianes Sangsues",
			'es-es': "Lianas Succionadoras",
			'it-it': "Liane Aspiranti",
			'pt-br': "Vinhas de Sucção",
			'de-de': "Saugranken"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Tangrowth has two arms that it can extend as it pleases. Recent research has shown that these arms are, in fact, bundles of vines.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691722,
				tcgplayer: 478051
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691722,
				tcgplayer: 478051
			}
		},
	],
}

export default card
