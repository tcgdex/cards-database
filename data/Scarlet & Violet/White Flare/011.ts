import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [498],
	set: Set,

	name: {
		en: "Tepig",
		fr: "Gruikui",
		de: "Floink",
		it: "Tepig",
		pt: "Tepig",
		es: "Tepig",
		'es-mx': "Tepig"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			pt: "Investida",
			es: "Placaje",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			it: "Rotolamento",
			pt: "Rolagem",
			es: "Rodar",
			'es-mx': "Rodada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835923,
				tcgplayer: 642126
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835923,
				tcgplayer: 642126
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 835923,
				tcgplayer: 642126
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836511,
				tcgplayer: 642371
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836512,
				tcgplayer: 642299
			}
		},
		{
			type: "holo",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836668,
			}
		},
	],
}

export default card
