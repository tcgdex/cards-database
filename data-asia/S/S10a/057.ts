import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ヌメルゴンVSTAR",
		'zh-tw': "洗翠 黏美龍VSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Dragon"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "モイストスター",
				'zh-tw': "潤濕星星",
			},
			effect: {
				ja: "自分の番に使える。このポケモンのHPを、すべて回復する。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。將這隻寶可夢的HP全部恢復。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "アイアンローリング",
				'zh-tw': "鐵之回轉",
			},
			damage: 200,
			cost: ["Water", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-80」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-80」點。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656381,
				tcgplayer: 570720,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ヌメルゴンV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [706],
};

export default card;
