import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'de-de': "Rettan",
		'pt-br': "Ekans",
		'ko-kr': "아보"
	},

	illustrator: "Krgc",
	rarity: "None",
	category: "Pokemon",

	dexId: [23],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "By dislocating its jaw, it can swallow prey larger\nthan itself. After a meal, it curls up and rests.",
		'fr-fr': "Il peut se déboîter la mâchoire pour avaler tout rond des proies\nplus grosses que lui. Il se replie ensuite sur lui-même pour digérer.",
		'es-es': "Es capaz de desencajar la mandíbula para\nengullir presas enteras mayores que él mismo,\ntras lo cual se enrosca para descansar.",
		'it-it': "Può sganciare la mandibola per ingoiare\nintere prede più grosse di lui. Dopo il pasto,\nsi arrotola su se stesso per riposarsi.",
		'de-de': "Es hängt seinen Kiefer aus und verschlingt so\nselbst größere Beute am Stück. Danach rollt\nes sich zusammen und ruht sich aus.",
		'pt-br': "Desloca a própria mandíbula para engolir presas\nmaiores que si mesmo. Depois de uma refeição,\nse enrosca e descansa.",
		'ko-kr': "턱을 빼 자신보다\n큰 먹이를 통째로 삼킨다.\n식후에는 몸을 둥글게 하고 쉰다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Poison Sting",
			'fr-fr': "Dard-Venin",
			'es-es': "Picotazo Veneno",
			'it-it': "Velenospina",
			'de-de': "Giftstachel",
			'pt-br': "Ferrão Venenoso",
			'ko-kr': "독침"
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

	retreat: 1,
	boosters: ["vol6"]
}

export default card
