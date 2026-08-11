import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイアロー",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "激しい 戦いで 興奮すると 全身の 羽毛の 隙間から 火の粉を 噴き出して 飛行する。",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "スカイハント"}, "effect": {"ja": "自分の番に1回使える。コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、トラッシュする。"}}],

	attacks: [{"name": {"ja": "ほのおのつばさ"}, "damage": 110, "cost": ["Fire", "Fire"]}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ヒノヤコマ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [663],

	thirdParty: {
		cardmarket: 868092,
		tcgplayer: 674402,
	},
};

export default card;