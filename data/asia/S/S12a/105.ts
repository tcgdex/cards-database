import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス",
		'zh-tw': "拉帝亞斯",
		th: "ลาทิอาส",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "テレパシーで 人間と 気持ちを 通わせる。 光を 屈折させる 羽毛で 別の 姿に 変わる。",
		'zh-tw': "透過心靈感應和人類交流情感。會用能令光線折射的羽毛 變化成其他的樣子。",
		th: "ใช้พลังจิตสื่อความรู้สึกกับมนุษย์ จะเปลี่ยนเป็นรูปร่างอื่นด้วยขนปีกที่ทำให้แสงหักเห",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "レッドアシスト",
				'zh-tw': "紅色支援",
				th: "เรดแอสซิสต์",
			},
			effect: {
				ja: "自分の番に1回使える。自分の手札から[超]エネルギーを1枚選び、自分の「ラティオス」につける。",
				'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張【超】能量卡，附於自己的「拉帝歐斯」身上。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน [พลังจิต] 1 ใบจากบนมือฝ่ายเรา ติดที่ [ลาทิโอส] ฝ่ายเรา",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイナバリア",
				'zh-tw': "力之屏障",
				th: "ไดนาบาเรีย",
			},
			damage: 70,
			cost: ["Fire", "Psychic", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは「ポケモンVMAX」からワザのダメージを受けない。",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「寶可夢【VMAX】」招式的傷害。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจจากท่าต่อสู้ของ [โปเกมอน [VMAX]]",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687667,
				tcgplayer: 571643,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577483,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [380],
};

export default card;
