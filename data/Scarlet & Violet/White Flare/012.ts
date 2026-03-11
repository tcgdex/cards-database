import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [499],
	set: Set,

	name: {
		en: "Pignite",
		fr: "Grotichon",
		de: "Ferkokel",
		it: "Pignite",
		pt: "Pignite",
		es: "Pignite",
		'es-mx': "Pignite"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		en: "Tepig",
		fr: "Gruikui",
		de: "Floink",
		it: "Tepig",
		pt: "Tepig",
		es: "Tepig",
		'es-mx': "Tepig"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			it: "Fuoco Continuo",
			pt: "Combustão",
			es: "Combustión",
			'es-mx': "Combustión"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
			de: "Brandstempel",
			it: "Marchiafuoco",
			pt: "Choque de Calor",
			es: "Golpe Calor",
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