import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "forretress",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [205],
	hp: 80,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "スパイク",
			},
			effect: {
				ja: "対戦相手のターン中、対戦相手のベンチに入ったポクモンの1人が彼または彼女のアクティブなポクモンになるたびに、フォアレットはそれに10ダメージを与えます。 <em>（衰弱と抵抗を適用しないでください。）</em> fortretressが眠っている、混乱し、麻痺している場合、このパワーは機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				ja: "急速なスピン",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、アクティブなポケモンでそれを切り替え、ベンチポケモンをお持ちの場合は、アクティブなポケモンで1つを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
