import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	illustrator: "PLANETA Tsuji",
	dexId: [892],
	evolveFrom: { ja: "れんげきウーラオスV" },
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "れんげきウーラオスVMAX"
	},
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			ja: "しっぷうづき"
		},

		effect: {
			ja: "この番、このポケモンがベンチからバトル場に出ていたなら、120ダメージ追加。"
		},

		damage: "30+",
		cost: ["Fighting"]
	}, {
		name: {
			ja: "キョダイレンゲキ"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン2匹に、それぞれ120ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538723, tcgplayer: 569124, cardtrader: 240095 } }
	]
}

export default card