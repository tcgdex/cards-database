import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ピジョン",
		'zh-tw': "比比鳥",
		'th-th': "พีเจียน"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	dexId: [17],
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "広い 縄張りを 持っており 侵入する 邪魔者は 徹底的に つつかれてしまう。",
		'zh-tw': "擁有著廣闊的地盤。要是有哪個討厭鬼膽敢入侵， 就會遭到牠的瘋狂啄擊。",
		'th-th': "มีอาณาเขตกว้างขวาง ผู้ที่บุกรุกเข้ามาในอาณาเขตจะถูกไล่จิกจนพรุน"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "つばさでうつ",
			'zh-tw': "翅膀攻擊",
			'th-th': "โจมตีด้วยปีก"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 724975,
				tcgplayer: 567073,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card