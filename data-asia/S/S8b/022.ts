import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデV",
		'zh-tw': "焚焰蚣V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねつほうしゃ",
				'zh-tw': "熱放射",
			},
			damage: 20,
			cost: ["Fire"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュする。その場合、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "若希望，選擇1個這隻寶可夢身上附加的能量，將其丟棄。這個情況下，選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
		{
			name: {
				ja: "バーニングトレイン",
				'zh-tw': "燃燒列車",
			},
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586537,
				tcgplayer: 571275,
			},
		},
	],

	retreat: 3,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [851],
};

export default card;
