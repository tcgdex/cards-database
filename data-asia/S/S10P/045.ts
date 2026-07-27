import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークライ",
		'zh-tw': "達克萊伊",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "月 消えし夜。 集落の村人 全員が 悪夢 見る 珍事あり。 悪夢の中に 現れしポケモンと 村人ら 証言す。",
		'zh-tw': "以往曾有過在無月的夜裡，村子裡所有 的人都夢見了惡夢的異事。村人們宣稱 惡夢中出現的寶可夢就是此寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あくむ",
				'zh-tw': "惡夢",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			},
		},
		{
			name: {
				ja: "しっこくのやいば",
				'zh-tw': "漆黑利刃",
			},
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651104,
				tcgplayer: 569888,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [491],
};

export default card;
