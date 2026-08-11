import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カイデン",
		'zh-tw': "電海燕",
		'th-th': "ไคเด็น",
		'id-id': "Wattrel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [940],
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "翼の 骨は 風を 受けると 電気を 作る。 海に 飛び込み 獲物を 感電させて 捕らえる。",
		'zh-tw': "當翅膀的骨頭受到風吹時，就能製造出電力。會衝進 海裡讓獵物觸電後將其捕獲。",
		'th-th': "กระดูกที่ปีกจะผลิตกระแสไฟฟ้าเมื่อได้รับลม จะดำดิ่งลงสู่ทะเลเพื่อจับเหยื่อด้วยการช็อตด้วยไฟฟ้า",
		'id-id': "Kerangka sayap Wattrel menciptakan listrik jika menerima angin. Pokémon ini terjun ke laut, menyetrum mangsa, dan menangkapnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "バチバチ",
			'zh-tw': "劈哩啪啦",
			'th-th': "ประกายไฟ",
			'id-id': "Berpijar-pijar"
		},

		damage: 20
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
			type: "normal",
			thirdParty: {
				cardmarket: 692990,
				tcgplayer: 567141,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card