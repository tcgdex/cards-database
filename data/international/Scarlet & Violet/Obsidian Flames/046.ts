import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [318],
	set: Set,

	name: {
		'fr-fr': "Carvanha",
		'en-us': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Croc Aiguisé",
			'en-us': "Sharp Fang",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
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

	description: {
		'en-us': "These Pokémon have sharp fangs and powerful jaws. Sailors avoid Carvanha dens at all costs.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725126,
				tcgplayer: 509763,
				cardtrader: 255606
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725126,
				tcgplayer: 509763,
				cardtrader: 255606
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
