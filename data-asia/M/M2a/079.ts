import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のミミッキュ",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "陽の 当たらない 暗がりに 棲む。 人前に 出るときは ピカチュウに 似せた 布で 全身を 隠す。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ほうせきごっこ"}, "cost": ["Psychic", "Colorless"], "effect": {"ja": "相手のバトル場の「テラスタル」のポケモンが持つワザを1つ選び、このワザとして使う。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [778],
};

export default card;
