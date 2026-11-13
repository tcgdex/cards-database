import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "サーフゴー"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	dexId: [1000],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		ja: "コレクレー"
	},

	description: {
		ja: "１０００枚の コインで 体が できているらしい。 人懐こく だれとでも すぐに 仲良くなれる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "おおばんぶるまい"
		},

		effect: {
			ja: "自分の手札から「基本{M}エネルギー」を好きなだけ選び、自分のポケモンに好きなようにつける。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ゴージャスサーフ"
		},

		effect: {
			ja: "このポケモンについている{M}エネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。"
		},

		damage: "80×",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746515,
				tcgplayer: 567534,
				cardtrader: 269717,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577370,
			},
		},
	]
}

export default card
