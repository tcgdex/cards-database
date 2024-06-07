import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘",
		th: "พิคาชู",
		ja: "ピカチュウ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "越是能製造出強大電流的皮卡丘，臉頰上的囊就越 柔軟，同時也越有伸展性。",
		th: "ยิ่งไฟฟ้าที่พิคาชูผลิตมีความรุนแรงมากเท่าไร กระพุ้งแก้มก็ยิ่งนิ่มและยืดได้มากขึ้นเท่านั้น",
		ja: "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "皮卡強襲",
			th: "พิคาสไตรค์",
			ja: "ピカストライク"
		},

		effect: {
			'zh-tw': "在上個自己的回合，若自己的「咚咚鼠」使出了「咚咚短路」，則增加180點傷害。",
			th: "เทิร์นก่อนของฝ่ายเรา ถ้า [เดเด็นเนะ] ฝ่ายเราใช้ [เดเดช็อต] ไปแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 180",
			ja: "前の自分の番、自分の「デデンネ」が「デデショート」を使っていたなら、180ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [25]
}

export default card