import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "大雨を 降らせる 能力で 海を 広げたと 言われている。 海溝の 底で 眠っていた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "デュアルスプラッシュ" },
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "グランドウェーブ" },
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「グランドウェーブ」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558993,
			},
		},
	],

	retreat: 4,
	rarity: "Rare",
	dexId: [382],
};

export default card;
