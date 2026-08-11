import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ナカヌチャン",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "大きくて 頑丈な ハンマーを 作るために キリキザンの 群れを 襲って 金属を 集める。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "でたとこハンマー"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、1回使える。コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	attacks: [{"name": {"ja": "なぐる"}, "damage": 30, "cost": ["Metal"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "カヌチャン",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [958],

	thirdParty: {
		cardmarket: 840344,
		tcgplayer: 647158,
	},
};

export default card;