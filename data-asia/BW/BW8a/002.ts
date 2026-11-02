import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナッシー"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		ja: "タマタマ"
	},

	description: {
		ja: "歩く 熱帯雨林と 呼ばれる。 大きくなった 頭の ひとつが 地面に 落ちると タマタマになる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "たちふさがる"
		},

		effect: {
			ja: "次の相手の番、相手は手札から「サポート」を出して使えない。"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ふみつけ"
		},

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージを追加。"
		},

		damage: "60+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Water",
		value: "-20"
	}],

	retreat: 2,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567837, tcgplayer: 602246, cardtrader: 142977 }, stamp: ["1st-edition"] }
	]
}

export default card
