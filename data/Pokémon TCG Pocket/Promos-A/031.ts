import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		de: "Chillabell",
		'pt-br': "Cinccino",
		ko: "치라치노"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Minccino"
	},

	description: {
		en: "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff.",
		fr: "Il ne supporte pas de voir le moindre grain de poussière.\nIl utilise l'huile qu'il sécrète pour recouvrir son nid\nd'un revêtement protecteur.",
		es: "Es tan sumamente pulcro que no puede ver\nni una mota de polvo. La grasa que exuda\npor el cuerpo le sirve de película protectora.",
		it: "È un maniaco della pulizia e non sopporta la\nvista neanche di un granello di polvere. Riveste\nla tana del grasso che trasuda dal suo corpo.",
		de: "Es ist sehr reinlich und duldet nicht mal das\nkleinste Staubkorn. Es beschichtet sein Nest\nmit dem Öl, das sein Körper absondert.",
		'pt-br': "Seu corpo secreta um óleo que este Pokémon\nespalha sobre seu ninho para protegê-lo de poeira.\nCinccino não suporta nem um grãozinho de sujeira.",
		ko: "먼지 한 톨도 용납하지 않는 결벽증.\n몸에서 나오는 기름을\n둥지에 발라서 코팅한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Do the Wave",
			fr: "Faites la Vague",
			es: "Hacer la Ola",
			it: "Fare la Ola",
			de: "Wellenreiten",
			'pt-br': "Fazer a \"Ola\"",
			ko: "친구사이"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
			it: "Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco.",
			ko: "자신의 벤치 포켓몬의 수 × 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol3"]
}

export default card
