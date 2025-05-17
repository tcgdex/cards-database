import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Lopunny",
		fr: "Lockpin",
		es: "Lopunny",
		it: "Lopunny",
		de: "Schlapor",
		'pt-br': "Lopunny",
		ko: "이어롭"
	},

	illustrator: "Minahamu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Buneary"
	},

	description: {
		en: "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.",
		fr: "Constamment sur le qui-vive, il donne des coups de pied\nparticulièrement dévastateurs si une menace approche.",
		es: "Está siempre atento a lo que ocurre a su\nalrededor. Si advierte peligro, se defenderá\ncon patadas de potencia devastadora.",
		it: "Presta sempre attenzione all'ambiente\ncircostante e in caso di pericolo sfodera\ncalci di straordinaria potenza distruttiva.",
		de: "Schlapor behält seine Umgebung stets im Auge.\nWenn Gefahr im Verzug ist, setzt es sich mit\nvernichtenden Tritten zur Wehr.",
		'pt-br': "Lopunny está constantemente monitorando seus\narredores. Se o perigo se aproxima, este Pokémon\nresponde com chutes superdestrutivos.",
		ko: "주위 상황을 항상 신경 쓰고 있으며\n위험이 닥치면 무시무시한 파괴력을\n가진 킥을 날린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hopping Shot",
			fr: "Tir Sauteur",
			es: "Disparo Salto",
			it: "Colpo Salterino",
			de: "Hüpfkick",
			'pt-br': "Disparada Saltitante",
			ko: "홉핑슛"
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