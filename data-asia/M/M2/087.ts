import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ザシアン",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "あらゆるものを 切り捨てるさまから  妖精王の剣 と 呼ばれ  敵味方に 恐れ崇められた。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "リミットブレイク"}, "damage": "50+", "cost": ["Psychic", "Colorless"], "effect": {"ja": "相手のサイドの残り枚数が3枚以下なら、90ダメージ追加。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [888],

	thirdParty: {
		cardmarket: 850595,
		tcgplayer: 655866,
	},
};

export default card;