import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "スピンロトム",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "ロトムが 入れる 家電製品は いくつか あるが いちばん 初めに 開発されたのは 扇風機だ。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "ファンコール"}, "effect": {"ja": "最初の自分の番にだけ1回使える。自分の山札から、HPが「100」以下のポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。この番、すでに別の「ファンコール」を使っていたなら、この特性は使えない。"}}],

	attacks: [{"name": {"ja": "とつげきランディング"}, "cost": ["Colorless"], "damage": 70, "effect": {"ja": "場にスタジアムが出ていないなら、このワザは失敗。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [479],
};

export default card;
