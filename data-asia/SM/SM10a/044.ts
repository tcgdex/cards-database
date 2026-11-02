import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "トルネロス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "雲のような エネルギー体に 下半身が 包まれている。 時速３００キロで 空を 飛ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げんこつ" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "らいめいトルネード" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチに「ボルトロス」がいるなら、相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557323,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [641],
};

export default card;
