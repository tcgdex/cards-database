import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ハブネーク",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "硬い 岩で 刀の 尻尾を 研ぐ。 しげみに 隠れて 獲物に 近寄り 毒の キバで 襲う。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "エキサイトパワー"}, "effect": {"ja": "自分の場にタイプの「メガシンカex」がいるなら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。"}}],

	attacks: [{"name": {"ja": "しっこくのキバ"}, "damage": 120, "cost": ["Darkness", "Darkness", "Darkness"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [336],

	thirdParty: {
		cardmarket: 850559,
		tcgplayer: 655831,
	},
};

export default card;