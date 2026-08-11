import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [499],
	set: Set,

	name: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
		'de-de': "Ferkokel",
		'it-it': "Pignite",
		'pt-br': "Pignite",
		'es-es': "Pignite",
		'es-mx': "Pignite"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'de-de': "Floink",
		'it-it': "Tepig",
		'pt-br': "Tepig",
		'es-es': "Tepig",
		'es-mx': "Tepig"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'es-es': "Combustión",
			'es-mx': "Combustión"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Crash",
			'fr-fr': "Tacle Feu",
			'de-de': "Brandstempel",
			'it-it': "Marchiafuoco",
			'pt-br': "Choque de Calor",
			'es-es': "Golpe Calor",
			'es-mx': "Golpe de Calor"
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835924,
				tcgplayer: 642127
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835924,
				tcgplayer: 642127
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836513,
				tcgplayer: 642372
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836514,
				tcgplayer: 642300
			}
		},
	],
}

export default card
