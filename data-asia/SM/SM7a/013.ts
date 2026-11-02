import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードラン",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "マグマのように 燃えたぎる 血液が 体を 流れている。 火山の 洞穴に 生息する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひのたま" },
			damage: 60,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ヒートバズーカ" },
			damage: 150,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を上から5枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558901,
			},
		},
	],

	retreat: 4,
	rarity: "Rare",
	dexId: [485],
};

export default card;
