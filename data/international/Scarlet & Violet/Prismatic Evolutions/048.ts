import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'pt-br': "Pupitar",
		'it-it': "Pupitar",
		'de-de': "Pupitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'pt-br': "Larvitar",
		'it-it': "Larvitar",
		'de-de': "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sand Spray",
			'fr-fr': "Jet Sableux",
			'es-es': "Rociado de Arena",
			'pt-br': "Spray de Areia",
			'it-it': "Silicospruzzo",
			'de-de': "Sandspray"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'it-it': "Martello",
			'de-de': "Einhämmern"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Shigenori Negishi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805437,
				tcgplayer: 610403
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805437,
				tcgplayer: 610403
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806474,
				tcgplayer: 610570
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806475,
				tcgplayer: 610671
			}
		},
	],
}

export default card
