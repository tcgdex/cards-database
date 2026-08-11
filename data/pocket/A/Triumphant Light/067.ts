import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
		'es-es': "Staravia",
		'it-it': "Staravia",
		'de-de': "Staravia",
		'pt-br': "Staravia",
		'ko-kr': "찌르버드"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [397],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Starly"
	},

	description: {
		'en-us': "Recognizing their own weakness, they always live in a group. When alone, a Staravia cries noisily.",
		'fr-fr': "Conscient de sa faiblesse, il vit toujours en groupe.\nQuand il se retrouve seul, il se met à piailler bruyamment.",
		'es-es': "Son conscientes de su debilidad, así que siempre viven\nen grupo. Si se encuentran solos, lloran a gritos.",
		'it-it': "Conscio della propria debolezza, forma grandi\ngruppi con i propri simili. Quando si ritrova\nsolo, canta con voce insistente e fastidiosa.",
		'de-de': "Da sie sich ihrer eigenen Schwäche bewusst sind,\nleben Staravia stets in Schwärmen. Sind sie allein,\nstoßen sie laute Rufe aus.",
		'pt-br': "Reconhecendo suas próprias fraquezas, eles sempre vivem\nem grupo. Quando sozinho, um Staravia chora\nde forma ruidosa.",
		'ko-kr': "자신의 약함을 잘 알고 있기에\n항상 무리를 지어 살고 있다.\n혼자가 되면 요란하게 운다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'de-de': "Flügelschlag",
			'pt-br': "Ataque de Asa",
			'ko-kr': "날개치기"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
