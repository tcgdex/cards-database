import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [243],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "稲妻が破裂します",
			},
			effect: {
				ja: "手からライコウに稲妻エネルギーカードを取り付けるたびに、相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御するポケモンでそれを切り替えます。ライコウが眠っている、混乱し、麻痺している間、このパワーは機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				ja: "稲妻タックル",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、ライコウはそれ自体に20のダメージを与えます。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
