import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノドクガ",
		'zh-tw': "鐵毒蛾",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "捕獲例は ゼロ。 データ不足。 古い 書物に 記された 物体と 特徴が 一致。",
		'zh-tw': "無捕獲紀錄。資料不足。 其特徵與古書裡 所記載的物體一致。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きゅういん",
				'zh-tw': "吸納",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
				'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。",
			},
		},
		{
			name: {
				ja: "ワイルドリジェクター",
				'zh-tw': "瘋狂拒絕",
			},
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは「古代」のポケモンからワザのダメージを受けない。",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「古代」寶可夢招式的傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773758,
				tcgplayer: 566260,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [994],
};

export default card;
