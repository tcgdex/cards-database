import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードランVMAX",
		'zh-tw': "席多藍恩VMAX",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "マグマゲイン",
				'zh-tw': "熔岩增輝",
			},
			effect: {
				ja: "場に自分のスタジアムが出ているなら、自分の番に1回使える。このポケモンのHPを「50」回復する。",
				'zh-tw': "若場上有自己的競技場卡，則在自己的回合時可使用1次。將這隻寶可夢恢復「50」HP。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイバクネツ",
				'zh-tw': "極巨爆熱",
			},
			damage: 180,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651074,
				tcgplayer: 569858,
			},
		},
	],

	evolveFrom: {
		ja: "ヒードランV",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [485],
};

export default card;
