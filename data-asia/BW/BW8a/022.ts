import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドクイン"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [31],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		ja: "ニドリーナ"
	},

	description: {
		ja: "よろいのように 硬い ウロコが 全身を 包む。 巣穴の 子供を 命がけで 守る。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "どくのつの"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			ja: "ダブルスタンプ"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージを追加。"
		},

		damage: "60+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567865, tcgplayer: 602253, cardtrader: 142997 }, stamp: ["1st-edition"] }
	]
}

export default card
