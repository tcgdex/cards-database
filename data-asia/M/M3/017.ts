import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "バクガメス",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "爆薬で コーティングされた  甲羅を 背負う。 攻撃してきた  敵を 大爆発で 返り討ち。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "こうらのトゲ"}, "effect": {"ja": "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	attacks: [{"name": {"ja": "ヒートブレス"}, "damage": "80+", "cost": ["Fire", "Fire", "Colorless"], "effect": {"ja": "コインを1回投げオモテなら、80ダメージ追加。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [776],

	thirdParty: {
		cardmarket: 867931,
		tcgplayer: 674336,
	},
};

export default card;