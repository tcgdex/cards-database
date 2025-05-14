import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		it: "Luxray",
		de: "Luxtra",
		'pt-br': "Luxray",
		ko: "렌트라"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio"
	},

	description: {
		en: "It can see clearly through walls to track down its prey and seek its lost young.",
		fr: "Il est capable de voir à travers les murs pour chasser\ndes proies ou retrouver ses petits s'ils s'égarent.",
		es: "Puede ver claramente a través de las paredes para\nbuscar a las presas huidas o a sus crías si se pierden.",
		it: "La sua capacità di vedere attraverso le pareti\nè utile non solo quando incalza la preda in fuga,\nma anche per trovare i suoi cuccioli smarriti.",
		de: "Es kann durch Wände sehen und spürt auf diese\nWeise Beute und verloren gegangene Junge auf.",
		'pt-br': "Pode ver claramente através de paredes para rastrear\nsuas presas e procurar seus jovens perdidos.",
		ko: "벽 저편까지 볼 수 있는 힘으로\n도망친 먹이를 쫓는 것 이외에도\n미아가 된 아이를 찾기도 한다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Volt Bolt"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "Discard all <span class=\"energy-text energy-text--type-lightning\"></span> Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card
