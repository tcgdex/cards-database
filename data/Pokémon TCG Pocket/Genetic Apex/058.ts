import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		de: "Entoron",
		'pt-br': "Golduck",
		ko: "골덕"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",

	dexId: [55],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
	},

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
			es: "Filo Agua",
			it: "Acquataglio",
			de: "Aquaschneide",
			'pt-br': "Aqua Gume",
			ko: "아쿠아에지"
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
		en: "When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.",
		fr: "Quand il nage à vitesse maximale grâce à\nses pattes palmées, son front se met à luire\npour une raison inconnue.",
		es: "Cuando nada a toda velocidad usando sus largas\nextremidades palmeadas, su frente comienza a brillar.",
		it: "Quando nuota a tutta velocità con i suoi\nlunghi arti palmati, la fronte gli si illumina.",
		de: "Wenn es mit den Schwimmflossen an seinen\nlangen Gliedmaßen schnell durchs Wasser\nschwimmt, beginnt seine Stirn zu glühen.",
		'pt-br': "Quando nada o mais rápido possível usando suas\nlongas membranas, a testa deste Pokémon\nde alguma forma começa a brilhar.",
		ko: "물갈퀴가 달린 긴 손발을 써서\n전력으로 헤엄치면\n왠지 이마에서 빛이 반짝인다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
