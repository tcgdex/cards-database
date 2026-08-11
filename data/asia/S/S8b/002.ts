import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コクーン",
		'zh-tw': "鐵殼蛹",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "天敵に 見つからないように 葉っぱの 裏や 枝の すきまに 隠れて 進化の ときを 待つ。",
		'zh-tw': "為了不被天敵發現，會躲在葉子背面或樹枝的間隙中， 等待進化的時刻到來。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かたまる",
				'zh-tw': "凝固",
			},
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-40」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-40」點。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586517,
				tcgplayer: 571255,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578355,
			},
		},
	],

	evolveFrom: {
		ja: "ビードル",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "None",
	dexId: [14],
};

export default card;
