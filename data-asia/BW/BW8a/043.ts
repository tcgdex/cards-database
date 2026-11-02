import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホーホー"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	dexId: [163],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "正確に 時を 告げることから 世界の ことわりを わきまえた 知恵の神様 とする 国もある。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "どっちもドロー"
		},

		effect: {
			ja: "おたがいのプレイヤーは、それぞれ自分の山札を2枚引く。"
		},

		cost: ["Colorless"]
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
		{ type: "normal", thirdParty: { cardmarket: 567887, tcgplayer: 602207, cardtrader: 143018 }, stamp: ["1st-edition"] }
	]
}

export default card
