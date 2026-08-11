import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Golem",
		'fr-fr': "Grolemd'Alola",
		'es-es': "Golemde Alola",
		'it-it': "Golemdi Alola",
		'de-de': "Alola-Geowaz",
		'pt-br': "Golemde Alola",
		'ko-kr': "알로라딱구리"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [76],
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Alolan Graveler"
	},

	description: {
		'en-us': "It's grumpy and stubborn. If you upset it, it discharges electricity from the surface of its body and growls with a voice like thunder.",
		'fr-fr': "Ce Pokémon est buté et caractériel. Quand il\ns'énerve, tout son corps produit des décharges,\net ses cris évoquent les roulements du tonnerre.",
		'es-es': "Es de carácter cascarrabias y obstinado.\nCuando se harta, descarga electricidad por\ntodo el cuerpo y ruge con voz atronadora.",
		'it-it': "Ha un carattere scontroso e testardo. Se viene\ncontrariato lancia scariche elettriche da tutto\nil corpo ed emette un verso simile a un tuono.",
		'de-de': "Wenn man dieses dickköpfige und mürrische Pokémon\nverärgert, stößt es aus seinem Körper Strom aus und\nheult mit donnernder Stimme auf.",
		'pt-br': "É carrancudo e teimoso. Quando este Pokémon é\nincomodado, descarrega eletricidade por todo seu corpo\ne ruge como um trovão.",
		'ko-kr': "신경질적이며 완고하다. 기분이\n상하면 전신에서 전기를 방출하여\n우렛소리같이 큰 소리로 운다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Super Zap Cannon",
			'fr-fr': "Super Élecanon",
			'es-es': "Superelectrocañón",
			'it-it': "Falcecannone Super",
			'de-de': "Super-Blitzkanone",
			'pt-br': "Supercanhão Zap",
			'ko-kr': "초전자포"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		effect: {
			'en-us': "Discard 2 {L} Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies {L} de ce Pokémon.",
			'es-es': "Descarta 2 Energías {L} de este Pokémon.",
			'it-it': "Rimuovi 2 Energie {L} da questo Pokémon.",
			'de-de': "Lege 2 {L}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {L} deste Pokémon.",
			'ko-kr': "이 포켓몬에서 {L}에너지를 2개 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["solgaleo"]
}

export default card
