import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロロン",
		'zh-tw': "噗隆隆",
	},

	illustrator: "HAGIYA Kaoru",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "鋼の 体が 本体。 岩に 張りつき その成分を エネルギーに 変えて 活動する。",
		'zh-tw': "鋼鐵身軀才是本體。 會貼在岩石上將其成分 轉換成活動用的能量。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "こうちょく",
				'zh-tw': "硬化",
			},
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
		{
			name: {
				ja: "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
			},
			damage: 20,
			cost: ["Metal", "Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773792,
				tcgplayer: 566294,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [965],
};

export default card;
