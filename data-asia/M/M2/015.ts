import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ダルマッカ",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "寝ているときは 押しても 引いても  けっして 倒れない。 縁起ものの  モチーフとして 人気が 高い。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ブレイズボール"}, "damage": "10+", "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーの数×20ダメージ追加。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [554],

	thirdParty: {
		cardmarket: 850522,
		tcgplayer: 655794,
	},
};

export default card;