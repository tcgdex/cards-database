import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
		'zh-tw': "叉字蝠",
		th: "โครแบท",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "人や ポケモンの 生き血が エサ。 少し 吸わないで いるだけで 弱って 飛べなくなって しまう。",
		'zh-tw': "主食是人和寶可夢的鮮血。只要一小段時間沒吸血，就會衰弱到無法飛行。",
		th: "อาหารคือเลือดสด ๆ ของคนหรือโปเกมอน ถ้าดูดเลือดน้อยไปก็จะอ่อนแรงจนบินไม่ไหวทีเดียว",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ごっそりドロー",
				'zh-tw': "全數抽出",
				th: "จั่วให้หมด",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を3枚引く。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫抽出3張卡。",
				th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "つばさでうつ",
				'zh-tw': "翅膀攻擊",
				th: "โจมตีด้วยปีก",
			},
			damage: 100,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533422,
				tcgplayer: 568989,
			},
		},
	],

	evolveFrom: {
		ja: "ゴルバット",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [169],
};

export default card;
