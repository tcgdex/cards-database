import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリジュラス",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "まわりから 静電気を 集める。 四つん這いの 体勢で 撃ち出す ビームは 絶大な 威力。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "コーティングアタック"}, "damage": 120, "cost": ["Metal", "Metal", "Metal"], "effect": {"ja": "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ジュラルドン",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [1018],

	thirdParty: {
		cardmarket: 850570,
		tcgplayer: 655842,
	},
};

export default card;