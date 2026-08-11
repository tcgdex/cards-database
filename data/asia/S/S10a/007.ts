import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "マユルド",
		th: "มายูลด์",
		'zh-tw': "盾甲繭",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "マユに こもっている あいだに 受けた 攻撃は 進化しても 忘れずに かならず 仕返しする。",
		th: "มันจะไม่มีวันลืมการโจมตีที่เข้ามาในขณะที่กำลังเก็บตัวอยู่ในรังไหมเลย แม้จะวิวัฒนาการไปแล้วก็ตาม และจะตามล้างแค้นให้จงได้",
		'zh-tw': "就算進化了也不會忘記待在繭中時受到的攻擊。 一定會設法進行報復。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かたくなる",
				th: "แข็งขึ้น",
				'zh-tw': "變硬",
			},
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このポケモンは「60」以下のワザのダメージを受けない。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้ที่น้อยกว่าหรือเท่ากับ [60]",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「60」以下的招式的傷害。",
			},
		},
		{
			name: {
				ja: "ころがりタックル",
				th: "กลิ้งโจมตี",
				'zh-tw': "滾動衝撞",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656225,
				tcgplayer: 570670,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577094,
			},
		},
	],

	evolveFrom: {
		ja: "ケムッソ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [268],
};

export default card;
