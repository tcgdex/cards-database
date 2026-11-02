import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "バルチャイ",
		'zh-tw': "禿鷹丫頭",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "すぐに 大きく 育つので お尻の 骸骨は 巣の 中で お下がりとして 使いまわされる。",
		'zh-tw': "由於很快就會長大，屁股上的骸骨會接著傳給巢裡更小的禿鷹丫頭用。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "するどいはね",
				'zh-tw': "銳利羽",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "エアスラッシュ",
				'zh-tw': "空氣斬",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575619,
				tcgplayer: 569565,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [629],
};

export default card;
