import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "太古盔甲",
		th: "อามัลโด",
		ja: "アーマルド"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "進化後搬到了陸地上生活，且下半身獲得了強化。用尾巴 使出的一擊破壞力十分驚人。",
		th: "วิวัฒนาการและขึ้นมาบนบก ร่างกายส่วนล่างถูกเสริมให้แกร่งขึ้น การโจมตีครั้งเดียวด้วยหางนั้นมีพลังทำลายล้างสูงมาก",
		ja: "進化して 陸地に 上がった。 下半身が 強化され しっぽの 一撃は すごい 破壊力だ。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "割剝鉤爪",
			th: "กรงเล็บตัด",
			ja: "かりとるかぎづめ"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢的剩餘HP為「100」以下，則將那隻寶可夢【氣絕】。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี HP เหลือน้อยกว่าหรือเท่ากับ [100] จะทำให้โปเกมอนนั้น[หมดสภาพ]",
			ja: "相手のバトルポケモンの残りHPが「100」以下なら、そのポケモンをきぜつさせる。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "岩石粉碎",
			th: "ร็อคสแมช",
			ja: "ロックスマッシュ"
		},

		damage: 160,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [348],

	thirdParty: {
		cardmarket: 680189
	}
}

export default card