import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メロエッタ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "メロエッタの 奏でる 旋律は まわりの ポケモンを 喜ばせたり 悲しませるほどの パワーがある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "タッグエール" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の手札にあるエネルギーを1枚、自分の「TAG TEAM」のポケモンにつける。",
			},
		},
		{
			name: { ja: "りゅうせいステップ" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557306,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [648],
};

export default card;
