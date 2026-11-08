import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorvd'Alola",
		'es-es': "Grimerde Alola",
		'it-it': "Grimerdi Alola",
		'de-de': "Alola-Sleima",
		'pt-br': "Grimerde Alola",
		'ko-kr': "알로라질퍽이"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [88],
	hp: 70,
	types: ["Darkness"],

	description: {
		'en-us': "There are a hundred or so of them living in\nAlola's waste-disposal site. They're all hard\nworkers who eat a lot of trash.",
		'fr-fr': "Dans les décharges d'Alola, une centaine d'entre\neux dévorent les immondices avec diligence.",
		'es-es': "En los vertederos de Alola habitan unos 100\nejemplares que devoran la basura con diligencia.",
		'it-it': "Negli impianti di smaltimento rifiuti di Alola ne vivono circa\n100 esemplari che lavorano sodo mangiando rifiuti in quantità.",
		'de-de': "Die Müllanlagen Alolas beherbergen rund hundert\nExemplare dieses Pokémon. Sie sind fleißig dabei,\nriesige Mengen an Müll zu vertilgen.",
		'pt-br': "Há cerca de cem deles vivendo no lixão de Alola.\nEles todos trabalham duro e comem muito lixo.",
		'ko-kr': "알로라의 쓰레기 처리장에서는\n약 100마리가 살고 있다. 모두\n쓰레기를 많이 먹는 유능한 일꾼이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Poison Gas",
			'fr-fr': "Gaz Toxik",
			'es-es': "Gas Venenoso",
			'it-it': "Velenogas",
			'de-de': "Giftwolke",
			'pt-br': "Gás Venenoso",
			'ko-kr': "독가스"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			'ko-kr': "상대의 배틀 포켓몬을 독으로 만든다.",
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