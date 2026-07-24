import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "セキタンザン",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "温厚な 気質だが 怒ると 怖い。 １５００度の 燃えあがる 体で のしかかり 焼きつくす。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "タールキャノン" },
			cost: ["Fighting"],
			effect: {
				ja: "相手のポケモン1匹に、140ダメージ。自分のトラッシュに「基本[F]エネルギー」が10枚以上ないなら、このワザは失敗。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "きょたいでつっこむ" },
			damage: 220,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861340,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861684,
			},
		},
		{
			type: "reverse",
			foil: "duskball",
			thirdParty: {
				cardmarket: 861685,
			},
		},
	],

	evolveFrom: {
		ja: "トロッゴン",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "None",
	dexId: [839],
};

export default card;
