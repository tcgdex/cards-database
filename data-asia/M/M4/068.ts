import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ミネズミ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "頬の 袋に エサを 溜めこみ 何日も 見張りを 続ける。 尻尾で 仲間に 合図する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かんしのめ" },
			effect: {
				ja: "このポケモンがいるかぎり、おたがいのポケモン全員にのっているダメカンは、別のポケモンにのせ替えられない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876967,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [504],
};

export default card;
