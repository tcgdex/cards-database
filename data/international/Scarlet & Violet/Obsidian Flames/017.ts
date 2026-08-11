import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [762],
	set: Set,

	name: {
		'fr-fr': "Candine",
		'en-us': "Steenee",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Croquine",
		'en-us': "Bounsweet",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Aromathérapie",
			'en-us': "Aromatherapy",
			'es-es': "Aromaterapia",
			'it-it': "Aromaterapia",
			'pt-br': "Aromaterapia",
			'de-de': "Aromakur"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de chacun de vos Pokémon.",
			'en-us': "Heal 30 damage from each of your Pokémon.",
			'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Tranch'Herbe",
			'en-us': "Razor Leaf",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'pt-br': "Folha Navalha",
			'de-de': "Rasierblatt"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Steenee spreads a sweet scent that makes others feel invigorated. This same scent is popular for antiperspirants.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725097,
				tcgplayer: 509748,
				cardtrader: 255577
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725097,
				tcgplayer: 509748,
				cardtrader: 255577
			}
		},
	],

	illustrator: "nagimiso",

	
}

export default card
