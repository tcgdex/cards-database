import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "クレッフィ",
		'zh-tw': "鑰圈兒",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "昔は 鉱山に 棲んでいたが エサの 鉱物が 減ってきたので 人里に 現れるようになった。",
		'zh-tw': "過去棲息在礦山裡，因為作為食物的礦物逐漸減少，於是開始出現在人類的聚落中。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "アンロック",
				'zh-tw': "解鎖",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571620,
				tcgplayer: 569360,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [707],
};

export default card;
