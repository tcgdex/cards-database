import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [498],
	set: Set,

	name: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'de-de': "Floink",
		'it-it': "Tepig",
		'pt-br': "Tepig",
		'es-es': "Tepig",
		'es-mx': "Tepig"
	},

	illustrator: "Orca",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida",
			'es-es': "Placaje",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'de-de': "Walzer",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'es-es': "Rodar",
			'es-mx': "Rodada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836084,
				tcgplayer: 642211
			}
		},
	],
}

export default card
