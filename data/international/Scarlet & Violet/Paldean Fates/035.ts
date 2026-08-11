import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [547],
	set: Set,

	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'it-it': "Vento di Fata",
			'pt-br': "Vento de Fada",
			'de-de': "Feenbrise"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751572,
				tcgplayer: 534181,
				cardtrader: 274219
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751572,
				tcgplayer: 534181,
				cardtrader: 274219
			}
		},
	],

	illustrator: "KYUPIYAMA",

	description: {
		'en-us': "As long as this Pokémon bathes in sunlight, its cotton keeps growing. If too much cotton fluff builds up, Whimsicott tears it off and scatters it.",
	},

}

export default card
