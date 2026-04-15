import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガー",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "物陰に 姿を 隠す。 ゲンガーの 潜んでいる 部屋は 温度が ５度 下がると いわれる。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "むげんのかげ"}, "effect": {"ja": "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、トラッシュせず、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）"}}],

	attacks: [{"name": {"ja": "マインドジャック"}, "damage": "10+", "cost": ["Darkness"], "effect": {"ja": "相手のベンチポケモンの数×30ダメージ追加。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "メガゲンガーex",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [94],

	thirdParty: {
		cardmarket: 867971,
		tcgplayer: 674368,
	},
};

export default card;