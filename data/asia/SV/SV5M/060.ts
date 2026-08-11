import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ジジーロン",
		'zh-tw': "老翁龍",
		th: "จิจีลอน",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "標高３０００メートルを 超える 山で 暮らす。 まれに 街へ やって来て 子どもたちと 遊ぶ。",
		'zh-tw': "住在海拔超過３０００公尺的山上。偶爾也會來到城鎮， 與住在那裡的孩子們一起玩耍。",
		th: "อาศัยอยู่บนเขาที่มีความสูงเกิน 3000 เมตร นาน ๆ ทีจะเข้ามาในเมืองและเล่นกับเด็ก ๆ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっぱたく",
				'zh-tw': "重摑",
				th: "ตบแรง",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "げきこうほう",
				'zh-tw': "盛怒炮",
				th: "ปืนใหญ่เดือดจัด",
			},
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にダメカンがのっているなら、120ダメージ追加。",
				'zh-tw': "若自己的所有備戰寶可夢身上都放置有傷害指示物，則增加120點傷害。",
				th: "ถ้าโปเกมอนบนเบนช์ฝ่ายเราทุกตัวมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752944,
				tcgplayer: 566211,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [780],
};

export default card;
