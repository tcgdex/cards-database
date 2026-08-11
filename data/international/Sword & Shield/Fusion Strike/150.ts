import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [759],
	set: Set,

	name: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'pt-br': "Stufful",
		'de-de': "Velursi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		'en-us': "The way it protects itself by flailing its arms may be an adorable sight, but stay well away. This is flailing that can snap thick tree trunks."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'de-de': "Verprügler",
			'es-es': "Toque",
			'pt-br': "Pulso",
			'it-it': "Battuta"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'de-de': "Walzer",
			'es-es': "Rodar",
			'pt-br': "Rolagem",
			'it-it': "Rotolamento"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582778,
				tcgplayer: 253364
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582778,
				tcgplayer: 253364
			}
		},
	],
}

export default card
