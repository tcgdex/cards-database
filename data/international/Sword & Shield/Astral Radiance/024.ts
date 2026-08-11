import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [156],
	set: Set,

	name: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson",
		'es-es': "Quilava",
		'it-it': "Quilava",
		'pt-br': "Quilava",
		'de-de': "Igelavar"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre",
		'es-es': "Cyndaquil",
		'it-it': "Cyndaquil",
		'pt-br': "Cyndaquil",
		'de-de': "Feurigel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This creature's fur is most mysterious—it is wholly impervious to the burning touch of flame. Should Quilava turn its back to you, take heed! Such a posture indicates a forthcoming attack.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658526,
				tcgplayer: 272224
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658526,
				tcgplayer: 272224
			}
		},
	],
}

export default card
