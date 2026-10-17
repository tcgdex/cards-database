import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ランプラー"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [608],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		ja: "ヒトモシ"
	},

	description: {
		ja: "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ひだね"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "やきこがす"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		},

		damage: 40,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567846, tcgplayer: 602210, cardtrader: 142983 }, stamp: ["1st-edition"] }
	]
}

export default card
