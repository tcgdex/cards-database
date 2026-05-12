import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "ゴミ袋が 産業廃棄物と 化学変化を 起こしたことで ポケモンとして 生まれ変わった。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "アシッドボム" }, "damage": "10", "cost": ["Darkness"], "effect": { "ja": "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。" } }
	],

	
	weaknesses: [{ "type": "Fighting", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [568],
	regulationMark: "I",
};

export default card;
