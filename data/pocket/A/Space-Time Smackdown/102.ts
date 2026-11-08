import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
		'es-es': "Stunky",
		'it-it': "Stunky",
		'de-de': "Skunkapuh",
		'pt-br': "Stunky",
		'ko-kr': "스컹뿡"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [434],
	hp: 70,
	types: ["Darkness"],

	description: {
		'en-us': "It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away.",
		'fr-fr': "Son derrière expulse un fluide nauséabond capable de faire\nfuir les Pokémon dans un rayon de deux kilomètres.",
		'es-es': "Expulsa un fluido maloliente por sus cuartos traseros.\nEl hedor repele Pokémon en un radio de 2 km.",
		'it-it': "Emette un fluido puzzolente dal posteriore. Il\ntanfo tiene lontani i Pokémon nel raggio di 2 km.",
		'de-de': "Der Gestank der Substanz, die es aus seinem\nHinterleib versprüht, verbreitet sich in einem\nRadius von 2 km und vertreibt andere Pokémon.",
		'pt-br': "Espirra um fluído malcheiroso das costas.\nSeu fedor espalha-se por mais de 1 quilômetro,\nafastando outros Pokémon.",
		'ko-kr': "엉덩이에서 뿜어지는 역한 분비액의\n냄새는 반경 2km까지 멀리 퍼져\n주변의 포켓몬이 자리를 뜨게 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'de-de': "Kratzer",
			'pt-br': "Arranhão",
			'ko-kr': "할퀴기"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
