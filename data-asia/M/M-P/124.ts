import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メッソン",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "怯えると 玉ねぎ100個分の 催涙成分を もつ 涙を 流して もらい泣き させる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 40,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891853,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [816],
};

export default card;
