import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "モルフォン",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "ばらまかれた りんぷんに 触れると 体の 感覚が おかしくなって まっすぐ 立っていられなくなる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アサシンフライト" },
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、相手のバトルポケモンが特殊状態なら、使える。相手のベンチポケモン1匹に、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "どくのこな" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557361,
			},
		},
	],

	evolveFrom: {
		ja: "コンパン",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [49],
};

export default card;
