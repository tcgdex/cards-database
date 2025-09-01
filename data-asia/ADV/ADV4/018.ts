import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ninetales ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [38],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "激しいまぶしさ",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。新しい防御ポケモンは今や燃え、混乱しています。",
			},
		},
		{
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "火の爆発",
			},
			effect: {
				ja: "Ninetales Exに取り付けられた火エネルギーを廃棄します。",
			},
			damage: 100,
		},
	],

	retreat: 1,

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
