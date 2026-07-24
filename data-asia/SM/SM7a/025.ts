import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハギギシリ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "念力で 獲物を しびれさせ 丈夫な 歯で 噛み砕く。 シェルダーの 殻でも よゆうだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコトリップ" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "きずをたどる" },
			cost: ["Water", "Colorless"],
			effect: {
				ja: "ダメカンがのっている相手のベンチポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558913,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [779],
};

export default card;
