import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "グライオン",
		'zh-tw': "天蠍王",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "羽音を 立てずに 空を 飛ぶ。 長い 尻尾で 獲物を 捕まえ キバで 急所を 一突き。",
		'zh-tw': "可不發出振翅聲而在空中飛行。先用長長的尾巴攫住獵物， 再用牙齒朝弱點給予一刺。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ハリケーンショック",
				'zh-tw': "颶風衝擊",
			},
			damage: "50×",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "コインを4回投げ、オモテの数×50ダメージ。オモテが2回以上なら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲4次硬幣，造成正面出現的次數×50點傷害。若出現2次以上正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656348,
				tcgplayer: 570702,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577117,
			},
		},
	],

	evolveFrom: {
		ja: "グライガー",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [472],
};

export default card;
