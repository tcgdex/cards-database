import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオン",
		'zh-tw': "勾帕路翁",
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "鋼の 心と 体を 持つ。 人が ポケモンを 傷つけたとき 仲間とともに 人を こらしめた。",
		'zh-tw': "有著鋼鐵的心靈與身體。當人類傷害寶可夢時，會與夥伴一起制裁人類。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ヘッドバング",
				'zh-tw': "鐵頭碰",
			},
			damage: 40,
			cost: ["Metal", "Colorless"],
		},
		{
			name: {
				ja: "メタルスラッシュ",
				'zh-tw': "金屬斬",
			},
			damage: 130,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560838,
				tcgplayer: 569279,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [638],
};

export default card;
