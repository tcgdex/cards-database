import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ケムッソ",
		th: "เคมุตโสะ",
		'zh-tw': "刺尾蟲",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "森や 草むらに 生息。 敵に 襲われた ときは お尻の 毒の トゲで 対抗する。",
		th: "อาศัยอยู่ตามป่าและพุ่มไม้ เวลาถูกศัตรูโจมตีเข้ามา จะแทงกลับด้วยเข็มพิษจากก้น",
		'zh-tw': "棲息在森林和草叢裡。受到敵人的襲擊時， 會用尾部的毒刺來對抗。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "チクチクさす",
				th: "แทงฉึกฉึก",
				'zh-tw': "刺刺痛痛",
			},
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "わらわらあつまる",
				th: "แห่รวมตัว",
				'zh-tw': "綿綿集聚",
			},
			cost: ["Grass", "Grass", "Grass"],
			effect: {
				ja: "自分の山札から「ケムッソ」「カラサリス」「アゲハント」「マユルド」「ドクケイル」を好きなだけ選び、相手に見せて、手札に加える。そして山札を切る。",
				th: "เลือกการ์ด [เคมุตโสะ] [คาราซาลิส] [อาเกฮันท์] [มายูลด์] [โดคุเคล] จากสำรับการ์ดฝ่ายเราตามจำนวนที่ชอบ ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
				'zh-tw': "從自己的牌庫選擇任意數量的「刺尾蟲」「甲殼繭」「狩獵鳳蝶」「盾甲繭」「毒粉蛾」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656185,
				tcgplayer: 570667,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577092,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [265],
};

export default card;
