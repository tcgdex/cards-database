import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グラエナ",
		'zh-tw': "大狼犬",
		'th-th': "กราเอนา",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'ja-jp': "１０匹 程度の 群れを 作って 一糸乱れぬ チームワークで 獲物を 追いつめて しとめるのだ。",
		'zh-tw': "會組成約１０隻規模的群體，靠著有條不紊的團隊合作 追擊並解決獵物。",
		'th-th': "สร้างฝูงอยู่ด้วยกันประมาณ 10 ตัว ไล่ต้อนและพิชิตเหยื่อกันด้วยทีมเวิร์กที่มีระเบียบไม่แตกแยก",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ハッスルバーク",
				'zh-tw': "喧鬧咆哮",
				'th-th': "เห่าสู้",
			},
			effect: {
				'ja-jp': "相手の場に「ポケモンVMAX」がいるなら、このポケモンがワザを使うためのエネルギーは、[C]エネルギー3個ぶん少なくなる。",
				'zh-tw': "若對手的場上有「寶可夢【VMAX】」，則這隻寶可夢使用招式所需的能量，減少3個【無】能量。",
				'th-th': "ถ้าบนกระดานฝ่ายตรงข้ามมี [โปเกมอน【VMAX】] อยู่ พลังงานที่โปเกมอนนี้ใช้สำหรับออกท่าต่อสู้ พลังงาน[ไร้สี]จะลดลง 3 ลูก",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ワイルドタックル",
				'zh-tw': "狂野衝撞",
				'th-th': "ไวลด์แทคเคิล",
			},
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも50ダメージ。",
				'zh-tw': "這隻寶可夢也受到50點傷害。",
				'th-th': "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 50 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687644,
				tcgplayer: 571620,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577471,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ポチエナ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [262],
};

export default card;
