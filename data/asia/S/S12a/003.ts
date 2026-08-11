import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ビリリダマ",
		'zh-tw': "洗翠 霹靂電球",
		th: "ฮิซุย บิริริดามา",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "モンスターボールと 空似せし 謎の ポケモン。 気 昂るほど 腹に 蓄えし電流を 解き放ち 大笑す。",
		'zh-tw': "形狀頗似精靈球的奇異寶可夢。 當情緒高漲時，積蓄在腹部的 電流就會放出，同時發出大笑。",
		th: "เป็นโปเกมอนปริศนาที่บังเอิญดูคล้ายกับมอนสเตอร์บอล เมื่อตื่นเต้นมาก ๆ จะปลดปล่อยกระแสไฟฟ้าที่เก็บไว้ในท้องออกมาแล้วหัวเราะร่า",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ごきげんチャージ",
				'zh-tw': "精心充能",
				th: "ชาร์จความเริงร่า",
			},
			cost: [],
			effect: {
				ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。自分のベンチポケモンを2匹まで選び、山札から基本エネルギーを1枚ずつつける。そして山札を切る。",
				'zh-tw': "這個招式只可在後攻玩家的最初回合使用。選擇最多2隻自己的備戰寶可夢，從牌庫附給那些寶可夢各1張基本能量卡。並且重洗牌庫。",
				th: "ท่าต่อสู้นี้ ใช้ได้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลังเท่านั้น เลือกโปเกมอนบนเบนช์ฝ่ายเราได้สูงสุด 2 ตัว นำการ์ดพลังงานพื้นฐานจากสำรับการ์ดมาติดตัวละ 1 ใบ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
				th: "กระแทก",
			},
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687480,
				tcgplayer: 571541,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577437,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [100],
};

export default card;
