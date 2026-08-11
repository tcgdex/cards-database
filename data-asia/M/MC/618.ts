import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "森の奥で 静かに 暮らす。 マントのような 紫の 毛は 歳を 重ねるほどに 長くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "よわみをにぎる" },
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番の終わりまで、このワザを受けたポケモンの弱点は[C]タイプになる。［弱点は「×2」でダメージ計算をする。］",
			},
		},
		{
			name: { ja: "ひらてうち" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863920,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [765],
};

export default card;
