import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wimpod",
		fr: "Sovkipou",
		es: "Wimpod",
		it: "Wimpod",
		de: "Reißlaus",
		'pt-br': "Wimpod",
		ko: "꼬시레"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "It's nature's cleaner—it eats anything and everything,  including garbage and rotten things. The ground near  its nest is always clean.",
		fr: "Ce véritable nettoyeur de la nature mange tout,\nmême la nourriture avariée et les déchets.\nLes environs de son nid sont toujours impeccables.",
		es: "Hace de barrendero natural al ir devorándolo\ntodo, basura y podredumbre incluidas. Alrededor\nde su nido reina siempre la mayor pulcritud.",
		it: "Poiché mangia di tutto, anche immondizia e\nsostanze putrescenti, è detto lo spazzino della\nnatura. Attorno alla sua tana regna la pulizia.",
		de: "Sie sind natürliche Reinigungskräfte und fressen\nalles, inklusive vergammeltem Essen und Müll.\nIn der Nähe ihrer Nester ist es immer sauber.",
		'pt-br': "Este Pokémon é o faxineiro da natureza e come de tudo,\naté lixo e coisas estragadas. A área ao redor do seu ninho\nestá sempre limpa.",
		ko: "상한 것이든 쓰레기든 닥치는 대로\n먹어 치우는 자연의 청소부.\n둥지 주변은 언제나 깨끗하다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wimp Out",
			fr: "Escampette",
			es: "Huida",
			it: "Fuggifuggi",
			de: "Reißaus",
			'pt-br': "Amarelar",
			ko: "도망태세"
		},

		effect: {
			en: "During your first turn, this Pokémon has no Retreat Cost.",
			fr: "Pendant votre premier tour, ce Pokémon n'a aucun Coût de Retraite.",
			es: "Durante tu primer turno, este Pokémon no tiene ningún Coste de Retirada.",
			it: "Durante il tuo primo turno, questo Pokémon non ha costo di ritirata.",
			de: "Während deines ersten Zuges hat dieses Pokémon keine Rückzugskosten.",
			'pt-br': "Durante o seu primeiro turno, este Pokémon não terá custo de Recuo.",
			ko: "자신의 첫 번째 차례에 이 포켓몬의 후퇴에 필요한 에너지를 모두 없앤다."
		}
	}],

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			de: "Nagen",
			'pt-br': "Roída",
			ko: "갉기"
		},

		damage: 30,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo"]
}

export default card