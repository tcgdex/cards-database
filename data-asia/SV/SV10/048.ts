import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のヨーギラス",
		'zh-tw': "<火箭隊的>幼基拉斯",
		'zh-cn': "<火箭隊的>幼基拉斯",
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地面 深くで 生まれ 山ほどの 土を 食べ終わると 体を つくるため サナギになる。",
		'zh-tw': "誕生在地底深處。 當牠吃完滿山的土壤後， 就會為了成長而變成蛹。",
		'zh-cn': "誕生在地底深處。 當牠吃完滿山的土壤後， 就會為了成長而變成蛹。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "やまかじり",
				'zh-tw': "嚼山",
				'zh-cn': "嚼山",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
				'zh-tw': "將對手的牌庫上方1張卡丟棄。",
				'zh-cn': "將對手的牌庫上方1張卡丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821880,
				tcgplayer: 628689,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [246],
};

export default card;
