import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスレアヴァス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [200],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "暗い呪文",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、ミスレアヴァスがあなたのアクティブなポカモンである場合、コインをひっくり返すことができます。頭の場合は、相手のポケモンの1つに1つのダメージカウンターを置きます。ミスレアヴァスが特別な状態の影響を受けている場合、または他のアクティブなポケモンがミスレアバスではない場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "影を隠します",
			},
			effect: {
				ja: "1匹のベンチポケモンでミスレアバスを切り替えます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
