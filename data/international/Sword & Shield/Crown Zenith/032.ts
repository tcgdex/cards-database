import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [321],
	set: Set,

	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'es-es': "Wailord",
		'it-it': "Wailord",
		'pt-br': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'de-de': "Wailmer"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bubble Drain",
			'fr-fr': "Vide Bulle",
			'es-es': "Drenaje Burbujas",
			'it-it': "Assorbibolla",
			'pt-br': "Dreno de Bolha",
			'de-de': "Blasengully"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 80
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "It can sometimes knock out opponents with the shock created by breaching and crashing its big body onto the water.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691749,
				tcgplayer: 478131
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691749,
				tcgplayer: 478131
			}
		},
	],
}

export default card
