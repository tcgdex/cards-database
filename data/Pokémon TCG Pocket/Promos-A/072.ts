import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Grimer",
		fr: "Tadmorvd'Alola",
		es: "Grimerde Alola",
		it: "Grimerdi Alola",
		de: "Alola-Sleima",
		'pt-br': "Grimerde Alola",
		ko: "알로라질퍽이"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "There are a hundred or so of them living in\nAlola's waste-disposal site. They're all hard\nworkers who eat a lot of trash.",
		fr: "Dans les décharges d'Alola, une centaine d'entre\neux dévorent les immondices avec diligence.",
		es: "En los vertederos de Alola habitan unos 100\nejemplares que devoran la basura con diligencia.",
		it: "Negli impianti di smaltimento rifiuti di Alola ne vivono circa\n100 esemplari che lavorano sodo mangiando rifiuti in quantità.",
		de: "Die Müllanlagen Alolas beherbergen rund hundert\nExemplare dieses Pokémon. Sie sind fleißig dabei,\nriesige Mengen an Müll zu vertilgen.",
		'pt-br': "Há cerca de cem deles vivendo no lixão de Alola.\nEles todos trabalham duro e comem muito lixo.",
		ko: "알로라의 쓰레기 처리장에서는\n약 100마리가 살고 있다. 모두\n쓰레기를 많이 먹는 유능한 일꾼이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Gas",
			fr: "Gaz Toxik",
			es: "Gas Venenoso",
			it: "Velenogas",
			de: "Giftwolke",
			'pt-br': "Gás Venenoso",
			ko: "독가스"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			ko: "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol8"]
}

export default card