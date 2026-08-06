import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "キマワリ",
		'zh-tw': "向日花怪",
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "暖かい 日差しが エネルギー。 太陽を 追いかけて 移動する 習性で 知られている。",
		'zh-tw': "溫暖的陽光就是牠的能量。以追著太陽移動的習性聞名。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "サンサンビーム",
				'zh-tw': "燦燦光束",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札からエネルギーを3枚までトラッシュし、その枚数×70ダメージ追加。",
				'zh-tw': "若希望，從自己的手牌將最多3張能量卡丟棄，增加其張數×70點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667607,
				tcgplayer: 569935,
			},
		},
	],

	evolveFrom: {
		ja: "ヒマナッツ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [192],
};

export default card;
