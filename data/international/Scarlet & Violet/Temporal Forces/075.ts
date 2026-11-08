import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [742],
	set: Set,

	name: {
		'en-us': "Cutiefly",
		'fr-fr': "Bombydou",
		'es-es': "Cutiefly",
		'it-it': "Cutiefly",
		'pt-br': "Cutiefly",
		'de-de': "Wommel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mini Drain",
			'fr-fr': "Mini-Assèchement",
			'es-es': "Minidrenaje",
			'it-it': "Miniassorbimento",
			'pt-br': "Minidreno",
			'de-de': "Minisauger"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
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
		'en-us': "Nectar and pollen are its favorite fare. You can find Cutiefly hovering around Gossifleur, trying to get some of Gossifleur's pollen.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760705,
				tcgplayer: 542819
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760705,
				tcgplayer: 542819
			}
		},
	],
	
	illustrator: "Sekio",

}

export default card