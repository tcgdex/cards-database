import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "アギルダー",
		'zh-tw': "敏捷蟲",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "殻を 脱ぎ捨て 身軽に なった。 帯状の 粘膜を 体に 巻きつけ 乾燥を 防ぐ。",
		'zh-tw': "脫殼後變得更輕巧了。為了防止乾燥，會將帶狀的黏膜裹在身上。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ニンジャトルネード",
				'zh-tw': "忍者龍捲風",
			},
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、このワザは【草】エネルギー1個で使える。",
				'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則這個招式只需要1個【草】能量即可使用。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575558,
				tcgplayer: 569509,
			},
		},
	],

	evolveFrom: {
		ja: "チョボマキ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [617],
};

export default card;
