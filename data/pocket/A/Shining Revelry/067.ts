import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'es-es': "Lopunny",
		'it-it': "Lopunny",
		'de-de': "Schlapor",
		'pt-br': "Lopunny",
		'ko-kr': "이어롭"
	},

	illustrator: "Minahamu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [428],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Buneary"
	},

	description: {
		'en-us': "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.",
		'fr-fr': "Constamment sur le qui-vive, il donne des coups de pied\nparticulièrement dévastateurs si une menace approche.",
		'es-es': "Está siempre atento a lo que ocurre a su\nalrededor. Si advierte peligro, se defenderá\ncon patadas de potencia devastadora.",
		'it-it': "Presta sempre attenzione all'ambiente\ncircostante e in caso di pericolo sfodera\ncalci di straordinaria potenza distruttiva.",
		'de-de': "Schlapor behält seine Umgebung stets im Auge.\nWenn Gefahr im Verzug ist, setzt es sich mit\nvernichtenden Tritten zur Wehr.",
		'pt-br': "Lopunny está constantemente monitorando seus\narredores. Se o perigo se aproxima, este Pokémon\nresponde com chutes superdestrutivos.",
		'ko-kr': "주위 상황을 항상 신경 쓰고 있으며\n위험이 닥치면 무시무시한 파괴력을\n가진 킥을 날린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Hopping Shot",
			'fr-fr': "Tir Sauteur",
			'es-es': "Disparo Salto",
			'it-it': "Colpo Salterino",
			'de-de': "Hüpfkick",
			'pt-br': "Disparada Saltitante",
			'ko-kr': "홉핑슛"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card