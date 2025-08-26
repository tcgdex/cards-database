import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "feraligatr -112/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [160],
	hp: 120,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "津波少佐",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em>、feraligatrがアクティブなポクモンであり、相手がベンチポクモンを持っている場合、対戦相手は1匹のベンチポクモンでアクティブなポクモンを切り替えます。いずれにせよ、ベンチを持っている場合は、Pokmonをベンチしている場合は、それらの1つを使用してFeraligatrを切り替えます。 Feraligatrが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "レンディングジョーズ",
			},
			effect: {
				ja: "防御ポケモンにダメージカウンターがない場合、この攻撃のベースダメージは70ではなく40です。",
			},
			damage: 70,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
