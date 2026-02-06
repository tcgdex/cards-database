import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛頭小鷹",
		th: "วาชิบอน",
		ja: "ワシボン"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "雖然還是雛鳥，但性情暴躁易怒。 經常藉故向親鳥挑起鬥爭， 為展示自己的力量而奮力搏擊。",
		th: "แม้รูปร่างจะเป็นเพียงแค่ลูกนก แต่ช่างใจร้อนเหลือ จะคอยหาเรื่องต่อสู้กับแม่นกอยู่บ่อยครั้ง เวลาที่ตั้งใจจะแสดงพละกำลังของตัวเอง ก็จะมีท่าทางขึงขัง",
		ja: "雛鳥の姿 なれど 血の気 多し。 ことあるごとに 親鳥に 戦を 仕掛け 己が力を 示さんと 躍起なり。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "飛撲",
			th: "กระโดดเข้าใส่",
			ja: "とびつく"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			ja: "コインを1回投げオモテなら、30ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [627],

	thirdParty: {
		cardmarket: 680223
	}
}

export default card