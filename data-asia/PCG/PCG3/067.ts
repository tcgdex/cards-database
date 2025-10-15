import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Rocket's Sneasel Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [215],
	hp: 90,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				ja: "ドラッグします",
			},
			effect: {
				ja: "ダメージを与える前に、対戦相手のベンチ付きポケモンを防御するポケモンと交換することができます。もしそうなら、この攻撃は新しい防御ポケモンに10ダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
			},
			damage: 10,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				ja: "暗いリング",
			},
			effect: {
				ja: "プレイ中の暗闇のポケモンごとに30ダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
