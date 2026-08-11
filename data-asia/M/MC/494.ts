import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイゴのエアームド",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "頑丈で 重そうな 鉄の 体だが 薄くて 軽いので 時速３００キロで とべる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "するどいはね" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ツインソニック" },
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863796,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [227],
};

export default card;
