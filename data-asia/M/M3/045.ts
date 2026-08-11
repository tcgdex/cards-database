import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ルチャブル",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "翼を 使い 空中で 姿勢を 制御。 防ぎにくい 頭上から 攻撃を 仕掛ける。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "リベンジキック"}, "damage": "30+", "cost": ["Fighting"], "effect": {"ja": "自分のベンチポケモンにダメカンがのっているなら、60ダメージ追加。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [701],

	thirdParty: {
		cardmarket: 867967,
		tcgplayer: 674364,
	},
};

export default card;