import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤヤコマ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "さえずる 声は 美しいが 縄張りに 入った 相手は 容赦しない 荒々しさだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "とりぶえ"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札から、抵抗力がタイプのポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "つつく"}, "damage": 20, "cost": ["Colorless", "Colorless"]}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [661],

	thirdParty: {
		cardmarket: 868047,
		tcgplayer: 674384,
	},
};

export default card;