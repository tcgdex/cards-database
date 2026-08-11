import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'de-de': "Entoron",
		'pt-br': "Golduck",
		'ko-kr': "골덕"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",

	dexId: [55],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Psyduck"
	},

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Aqua Edge",
			'fr-fr': "Aqua-Dague",
			'es-es': "Filo Agua",
			'it-it': "Acquataglio",
			'de-de': "Aquaschneide",
			'pt-br': "Aqua Gume",
			'ko-kr': "아쿠아에지"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.",
		'fr-fr': "Quand il nage à vitesse maximale grâce à\nses pattes palmées, son front se met à luire\npour une raison inconnue.",
		'es-es': "Cuando nada a toda velocidad usando sus largas\nextremidades palmeadas, su frente comienza a brillar.",
		'it-it': "Quando nuota a tutta velocità con i suoi\nlunghi arti palmati, la fronte gli si illumina.",
		'de-de': "Wenn es mit den Schwimmflossen an seinen\nlangen Gliedmaßen schnell durchs Wasser\nschwimmt, beginnt seine Stirn zu glühen.",
		'pt-br': "Quando nada o mais rápido possível usando suas\nlongas membranas, a testa deste Pokémon\nde alguma forma começa a brilhar.",
		'ko-kr': "물갈퀴가 달린 긴 손발을 써서\n전력으로 헤엄치면\n왠지 이마에서 빛이 반짝인다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
