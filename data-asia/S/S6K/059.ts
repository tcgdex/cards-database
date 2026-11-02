import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨクバリス",
		'zh-tw': "藏飽栗鼠",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "どんなに 硬い 木の実の 殻も 自慢の 歯で ボリボリ 齧る。 ガラルでは よく 見る ポケモン。",
		'zh-tw': "無論多麼堅硬的樹果殼都能用引以為傲的大牙咬碎。在伽勒爾是很常見的寶可夢。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ふてぶてしっぽ",
				'zh-tw': "不甩人尾",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分のポケモンについているエネルギーは、相手のグッズまたはサポートによる、トラッシュする効果と手札や山札にもどす効果を受けない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的寶可夢身上附加的能量，不會受到對手的物品或者支援者的效果影響而丟棄與放回手牌或牌庫。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560847,
				tcgplayer: 569287,
			},
		},
	],

	evolveFrom: {
		ja: "ホシガリス",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [820],
};

export default card;
