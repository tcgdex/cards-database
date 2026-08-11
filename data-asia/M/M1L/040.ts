import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタル",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "寿命が つきるとき あらゆる  生き物の 命を 吸いつくし  繭の 姿に 戻るという。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "わしづかみ"}, "damage": 20, "cost": ["Darkness"], "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、にげられない。"}}, {"name": {"ja": "ダークフェザー"}, "damage": 110, "cost": ["Darkness", "Darkness", "Colorless"]}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [717],

	thirdParty: {
		cardmarket: 840335,
		tcgplayer: 647149,
	},
};

export default card;