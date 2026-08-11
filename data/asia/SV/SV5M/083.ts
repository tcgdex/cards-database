import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジジーロン",
		'zh-tw': "老翁龍",
		'th-th': "จิจีลอน",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "標高３０００メートルを 超える 山で 暮らす。 まれに 街へ やって来て 子どもたちと 遊ぶ。",
		'zh-tw': "住在海拔超過３０００公尺的山上。偶爾也會來到城鎮， 與住在那裡的孩子們一起玩耍。",
		'th-th': "อาศัยอยู่บนเขาที่มีความสูงเกิน 3000 เมตร นาน ๆ ทีจะเข้ามาในเมืองและเล่นกับเด็ก ๆ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ひっぱたく",
				'zh-tw': "重摑",
				'th-th': "ตบแรง",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "げきこうほう",
				'zh-tw': "盛怒炮",
				'th-th': "ปืนใหญ่เดือดจัด",
			},
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモン全員にダメカンがのっているなら、120ダメージ追加。",
				'zh-tw': "若自己的所有備戰寶可夢身上都放置有傷害指示物，則增加120點傷害。",
				'th-th': "ถ้าโปเกมอนบนเบนช์ฝ่ายเราทุกตัวมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752967,
				tcgplayer: 566234,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [780],
};

export default card;
