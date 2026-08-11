import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'it-it': "Cinccino",
		'de-de': "Chillabell",
		'pt-br': "Cinccino",
		'ko-kr': "치라치노"
	},

	illustrator: "0313",
	category: "Pokemon",

	dexId: [573],
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Minccino"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Do the Wave",
			'fr-fr': "Faites la Vague",
			'es-es': "Hacer la Ola",
			'it-it': "Fare la Ola",
			'de-de': "Wellenreiten",
			'pt-br': "Fazer a \"Ola\"",
			'ko-kr': "친구사이"
		},

		effect: {
			'en-us': "This attack does 30 damage for each of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc.",
			'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco.",
			'ko-kr': "자신의 벤치 포켓몬의 수 × 30데미지를 준다."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff.",
		'fr-fr': "Il ne supporte pas de voir le moindre grain de poussière.\nIl utilise l'huile qu'il sécrète pour recouvrir son nid\nd'un revêtement protecteur.",
		'es-es': "Es tan sumamente pulcro que no puede ver\nni una mota de polvo. La grasa que exuda\npor el cuerpo le sirve de película protectora.",
		'it-it': "È un maniaco della pulizia e non sopporta la\nvista neanche di un granello di polvere. Riveste\nla tana del grasso che trasuda dal suo corpo.",
		'de-de': "Es ist sehr reinlich und duldet nicht mal das\nkleinste Staubkorn. Es beschichtet sein Nest\nmit dem Öl, das sein Körper absondert.",
		'pt-br': "Seu corpo secreta um óleo que este Pokémon\nespalha sobre seu ninho para protegê-lo de poeira.\nCinccino não suporta nem um grãozinho de sujeira.",
		'ko-kr': "먼지 한 톨도 용납하지 않는 결벽증.\n몸에서 나오는 기름을\n둥지에 발라서 코팅한다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
