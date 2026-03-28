import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル タチフサグマ",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "凄まじい 声量を もつ。 シャウトとともに 威嚇するさまは ブロッキングと 呼ばれている。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "スカーシャウト"}, "cost": ["Darkness", "Colorless"], "damage": "70×", "effect": {"ja": "相手のバトルポケモンにのっているダメカンの数×70ダメージ。"}}, {"name": {"ja": "パンクスマッシュ"}, "cost": ["Darkness", "Colorless", "Colorless"], "damage": 160, "effect": {"ja": "このポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ガラル マッスグマ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [862],
};

export default card;
