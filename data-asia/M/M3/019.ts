import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュゴン",
	},

	illustrator: "Yoshioka",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "寒さに 勝つため 体の中に 熱エネルギーを 蓄える。 寒い 海も ８ノットで 進む。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "おしながす"}, "effect": {"ja": "自分の番に何回でも使える。自分のベンチポケモンについているエネルギーを1個選び、バトルポケモンにつけ替える。"}}],

	attacks: [{"name": {"ja": "スプラッシュ"}, "damage": 60, "cost": ["Water", "Water"]}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "パウワウ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [87],

	thirdParty: {
		cardmarket: 867933,
		tcgplayer: 674338,
	},
};

export default card;