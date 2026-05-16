import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ラビフット",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "ふかふかの 体毛の おかげで 炎エネルギーを 温めやすく さらに 強い 炎を 出せる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ジャンプキック"}, "cost": ["Colorless"], "effect": {"ja": "相手のポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヒバニー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [814],

	thirdParty: {
		cardmarket: 840307,
		tcgplayer: 647125,
	},
};

export default card;