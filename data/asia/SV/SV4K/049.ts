import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤブクロン",
		'zh-tw': "破破袋",
		'th-th': "ยาบุคุรอน",
		'ko-kr': "깨봉이"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [568],
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "不衛生な 場所が 好き。 ゴミで 汚したまま 放っておくと 部屋にも 現れて 棲みつく。",
		'zh-tw': "喜歡不衛生的地方。如果不及時清理家裡的垃圾， 破破袋就會過來居住。",
		'th-th': "ชอบที่ไม่ถูกสุขอนามัย ถ้าทิ้งขยะให้สกปรกจะปรากฏตัวขึ้นและอาศัยอยู่ในห้อง",
		'ko-kr': "비위생적인 장소를 좋아한다. 쓰레기를 어질러놓은 채 내버려 두면 방에 나타나 그대로 눌러앉는다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "ガスでつつむ",
			'zh-tw': "瓦斯包圍",
			'th-th': "ห่อหุ้มด้วยแก๊ส",
			'ko-kr': "가스로감싸기"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ベノムヒット",
			'zh-tw': "毒液一擊",
			'th-th': "เวนอมฮิต",
			'ko-kr': "베놈히트"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741417,
				tcgplayer: 565804,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card