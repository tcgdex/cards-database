import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "カラサリス",
		th: "คาราซาลิส",
		'zh-tw': "甲殼繭",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "糸に ついた 朝露を 飲んで 進化の ときを 待ち続ける。 硬い 繭が 攻撃を 防ぐ。",
		th: "ดูดน้ำค้างที่ติดอยู่บนใย แล้วรอคอยเวลาที่จะวิวัฒนาการ รังไหมแข็ง ๆ ของมันคอยปกป้องการโจมตี",
		'zh-tw': "會喝絲線上掛著的朝露，持續等待進化的時刻來臨。 堅硬的繭能夠防禦攻擊。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "からむいと",
				th: "ใยพันตัว",
				'zh-tw': "纏繞線",
			},
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
				th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ไม่ได้",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			},
		},
		{
			name: {
				ja: "ぶつかる",
				th: "กระแทก",
				'zh-tw': "衝撞",
			},
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656187,
				tcgplayer: 570668,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577093,
			},
		},
	],

	evolveFrom: {
		ja: "ケムッソ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [266],
};

export default card;
