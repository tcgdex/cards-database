import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ランクルス",
		'zh-tw': "人造細胞卵",
		'th-th': "แลนคูลัส",
		'ko-kr': "란쿨루스",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "超能力を 使うよりも 自慢の 腕を ぶん回して 殴り倒すのを 好んでいる。",
		'zh-tw': "比起使用超能力，牠更喜歡靠著揮動 自傲的手臂來打倒對手。",
		'th-th': "ชอบใช้พลังที่ตัวเองภูมิใจต่อยทำลายมากกว่าใช้พลังจิต",
		'ko-kr': "초능력을 사용하는 것보다는 자랑거리인 팔을 휘둘러서 때려눕히는 것을 선호한다.",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "サモンゲート",
				'zh-tw': "傳喚之門",
				'th-th': "ซัมมอนเกต",
				'ko-kr': "서먼게이트",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から8枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。",
				'zh-tw': "查看自己的牌庫上方8張卡，從其中選擇任意數量的寶可夢卡，放置於備戰區。將剩餘卡放回牌庫並重洗。",
				'th-th': "ดูการ์ด 8 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอนจากในนั้นตามจำนวนที่ชอบ วางบนเบนช์ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
				'ko-kr': "자신의 덱을 위에서부터 8장 보고 그 중에서 포켓몬을 원하는 만큼 선택해서 벤치로 내보낸다. 남은 카드는 덱으로 되돌리고 섞는다.",
			},
		},
		{
			name: {
				'ja-jp': "ブレインシェイク",
				'zh-tw': "腦力震動",
				'th-th': "เบรนเชค",
				'ko-kr': "브레인셰이크",
			},
			damage: 100,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
				'ko-kr': "상대의 배틀 포켓몬을 혼란으로 만든다.",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752856,
				tcgplayer: 568409,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ダブラン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [579],
};

export default card;
