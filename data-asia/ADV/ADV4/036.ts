import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Relecanth",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [369],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "深い眠り",
			},
			effect: {
				ja: "Relicanthがあなたのアクティブなポカモンである限り、プレーヤーは、ターンの間に眠っている彼または彼女のポカモンのそれぞれに2つのコインをひっくり返します。いずれかのコインが尾の場合、そのポカンはまだ眠っています。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "あくび",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
