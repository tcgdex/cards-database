import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドダイトスex",
		'zh-tw': "土台龜ex",
		'th-th': "โดไดโทสex",
		'ko-kr': "토대부기 ex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "もりのこうしん",
				'zh-tw': "森林行進",
				'th-th': "ป่าเดินแถว",
				'ko-kr': "숲의행진",
			},
			damage: "30×",
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分の場の[G]ポケモンの数×30ダメージ。",
				'zh-tw': "造成自己的場上【草】寶可夢的數量×30點傷害。",
				'th-th': "แดเมจจะเท่ากับจำนวนโปเกมอน[หญ้า]บนกระดานฝ่ายเรา x30",
				'ko-kr': "자신의 필드의 (풀) 포켓몬의 수 × 30데미지를 준다.",
			},
		},
		{
			name: {
				'ja-jp': "ジャングルハンマー",
				'zh-tw': "叢林之錘",
				'th-th': "จังเกิลแฮมเมอร์",
				'ko-kr': "정글해머",
			},
			damage: 150,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「50」回復する。",
				'zh-tw': "將這隻寶可夢恢復「50」HP。",
				'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [50]",
				'ko-kr': "이 포켓몬의 HP를 「50」회복한다.",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752747,
				tcgplayer: 568339,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハヤシガメ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [389],

	suffix: "EX",
};

export default card;
