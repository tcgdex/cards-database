import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨルノズク"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [164],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ホーホー"
	},

	description: {
		ja: "特殊な 作りの 両目は わずかな 光さえ あれば くらやみでも 昼のように 見える。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "めぢから"
		},

		effect: {
			ja: "相手の手札の枚数×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "そらをとぶ"
		},

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567888, tcgplayer: 602254, cardtrader: 143019 }, stamp: ["1st-edition"] }
	]
}

export default card
