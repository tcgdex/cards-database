import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "feraligatr",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [160],
	hp: 120,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "津波少佐",
			},
			effect: {
				ja: "ターン中（攻撃の前に）、FeraligatrがアクティブなPokmonであり、相手がPokmonをベンチしている場合、対戦相手は1枚のベンチポクモンでアクティブなPokmonを切り替えます。いずれにせよ、ベンチを持っている場合は、Pokmonをベンチしている場合は、それらの1つを使用してFeraligatrを切り替えます。 Feraligatrが特別な状態の影響を受けている場合、このパワーは使用できません。",
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
