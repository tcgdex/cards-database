import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル",
		'zh-tw': "鐵啞鈴",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "磁力を お尻から 発生させ 敵を 勢いよく 吸いよせて 鋭い ツメで 串刺しにする。",
		'zh-tw': "會從臀部放出磁力將敵人迅猛地吸到身邊， 再以銳利的爪子刺穿對方。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "マグネリフト",
				'zh-tw': "磁力抬升",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から好きなカードを1枚選ぶ。残りの山札を切り、選んだカードを山札の上にもどす。",
				'zh-tw': "從自己的牌庫任意選擇1張卡。重洗剩餘牌庫，將所選的卡放回牌庫上方。",
			},
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 20,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667948,
				tcgplayer: 570004,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [374],
};

export default card;
