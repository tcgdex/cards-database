import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Golem",
		fr: "Grolemd'Alola",
		es: "Golemde Alola",
		it: "Golemdi Alola",
		de: "Alola-Geowaz",
		'pt-br': "Golemde Alola",
		ko: "알로라딱구리"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Alolan Graveler"
	},

	description: {
		en: "It's grumpy and stubborn. If you upset it, it discharges electricity from the surface of its body and growls with a voice like thunder.",
		fr: "Ce Pokémon est buté et caractériel. Quand il\ns'énerve, tout son corps produit des décharges,\net ses cris évoquent les roulements du tonnerre.",
		es: "Es de carácter cascarrabias y obstinado.\nCuando se harta, descarga electricidad por\ntodo el cuerpo y ruge con voz atronadora.",
		it: "Ha un carattere scontroso e testardo. Se viene\ncontrariato lancia scariche elettriche da tutto\nil corpo ed emette un verso simile a un tuono.",
		de: "Wenn man dieses dickköpfige und mürrische Pokémon\nverärgert, stößt es aus seinem Körper Strom aus und\nheult mit donnernder Stimme auf.",
		'pt-br': "É carrancudo e teimoso. Quando este Pokémon é\nincomodado, descarrega eletricidade por todo seu corpo\ne ruge como um trovão.",
		ko: "신경질적이며 완고하다. 기분이\n상하면 전신에서 전기를 방출하여\n우렛소리같이 큰 소리로 운다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Super Zap Cannon",
			fr: "Super Élecanon",
			es: "Superelectrocañón",
			it: "Falcecannone Super",
			de: "Super-Blitzkanone",
			'pt-br': "Supercanhão Zap",
			ko: "초전자포"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		effect: {
			en: "Discard 2 {L} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {L} de ce Pokémon.",
			es: "Descarta 2 Energías {L} de este Pokémon.",
			it: "Rimuovi 2 Energie {L} da questo Pokémon.",
			de: "Lege 2 {L}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {L} deste Pokémon.",
			ko: "이 포켓몬에서 {L}에너지를 2개 트래쉬한다."
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
