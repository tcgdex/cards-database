import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドン",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "特殊な 金属の 体は 鏡面加工のように 滑らか。 キズに 強く しかも 軽量。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はかいこうせん"}, "damage": 70, "cost": ["Metal", "Metal", "Metal"], "effect": {"ja": "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [884],

	thirdParty: {
		cardmarket: 850569,
		tcgplayer: 655841,
	},
};

export default card;