import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット",
		'zh-tw': "超音蝠",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "口から 出す 超音波で まわりの 様子を 探る。 狭い 洞窟も 器用に 飛びまわる。",
		'zh-tw': "會利用從口中發出的超音波 探查周圍的狀況。在狹窄的 洞窟裡也能靈巧地飛來飛去。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みちびく",
				'zh-tw': "引路",
			},
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "やみのキバ",
				'zh-tw': "暗之牙",
			},
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773776,
				tcgplayer: 566278,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [41],
};

export default card;
