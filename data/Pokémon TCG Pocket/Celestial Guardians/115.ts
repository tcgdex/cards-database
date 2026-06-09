import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mareanie",
		fr: "Vorastérie",
		es: "Mareanie",
		it: "Mareanie",
		de: "Garstella",
		'pt-br': "Mareanie",
		ko: "시마사리"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [747],
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "This Pokémon wanders the seaside looking for food. It often gets electric shocks from broken Pincurchin spines that it tries to eat.",
		fr: "Il erre en bord de mer en quête de nourriture.\nIl s'électrocute souvent en essayant de manger\ndes épines de Wattapik trouvées par terre.",
		es: "Vaga por las orillas en busca de sustento.\nSuele llevarse calambrazos al intentar comerse\nlas púas rotas de Pincurchin que encuentra.",
		it: "Vaga qua e là per le spiagge in cerca di prede.\nDi tanto in tanto cerca di mangiarsi un aculeo\ncaduto da un Pincurchin e prende la scossa.",
		de: "Auf Futtersuche wandert es an Küsten entlang.\nVersucht es, abgebrochene Britzigel-Stacheln zu\nessen, bekommt es oft einen elektrischen Schlag.",
		'pt-br': "Este Pokémon vaga pelo litoral em busca de comida.\nSempre leva choques elétricos dos espinhos quebrados\nde Pincurchin que tenta comer.",
		ko: "먹이를 찾아 해변을 배회한다.\n부러진 찌르성게의 가시를 먹으려다\n마비되어 있는 경우가 많다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			de: "Durchbohren",
			'pt-br': "Perfurar",
			ko: "궤찌르기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card