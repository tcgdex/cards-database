import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マルヤクデ",
		'zh-tw': "焚焰蚣",
		'th-th': "มารุยาคุเดะ",
		'ko-kr': "다태우지네",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。",
		'zh-tw': "發熱時的體溫大約有８００度。會像鞭子那樣彎曲身體， 朝著敵人彈跳過去。",
		'th-th': "อุณหภูมิร่างยามปล่อยความร้อนประมาณ 800 องศาเซลเซียส โค้งร่างราวกับแส้แล้วพุ่งลงมาโจมตี",
		'ko-kr': "발열 시의 체온은 약 800도. 몸을 채찍처럼 휘면서 덤벼든다.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "こがす",
				'zh-tw': "灼熱",
				'th-th': "เผา",
				'ko-kr': "그을리기",
			},
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
				'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
				'ko-kr': "상대의 배틀 포켓몬을 화상으로 만든다.",
			},
		},
		{
			name: {
				'ja-jp': "くろこげブレス",
				'zh-tw': "焦黑吐息",
				'th-th': "ลมหายใจเผาเกรียม",
				'ko-kr': "그을린브레스",
			},
			damage: 180,
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンがやけどでないなら、このワザは失敗。",
				'zh-tw': "若對手的戰鬥寶可夢沒有【灼傷】，則這個招式失敗。",
				'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามไม่เป็นสภาวะ[ไหม้] ท่าต่อสู้นี้จะล้มเหลว",
				'ko-kr': "상대의 배틀 포켓몬이 화상이 아니라면 이 기술은 실패한다.",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752753,
				tcgplayer: 568345,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤクデ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [851],
};

export default card;
