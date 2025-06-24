import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		de: "Rettan",
		'pt-br': "Ekans",
		ko: "아보"
	},

	illustrator: "Krgc",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests.",
		fr: "Il peut se déboîter la mâchoire pour avaler tout rond des proies\nplus grosses que lui. Il se replie ensuite sur lui-même pour digérer.",
		es: "Es capaz de desencajar la mandíbula para\nengullir presas enteras mayores que él mismo,\ntras lo cual se enrosca para descansar.",
		it: "Può sganciare la mandibola per ingoiare\nintere prede più grosse di lui. Dopo il pasto,\nsi arrotola su se stesso per riposarsi.",
		de: "Es hängt seinen Kiefer aus und verschlingt so\nselbst größere Beute am Stück. Danach rollt\nes sich zusammen und ruht sich aus.",
		'pt-br': "Desloca a própria mandíbula para engolir presas\nmaiores que si mesmo. Depois de uma refeição,\nse enrosca e descansa.",
		ko: "턱을 빼 자신보다\n큰 먹이를 통째로 삼킨다.\n식후에는 몸을 둥글게 하고 쉰다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
			es: "Picotazo Veneno",
			it: "Velenospina",
			de: "Giftstachel",
			'pt-br': "Ferrão Venenoso",
			ko: "독침"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
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

	retreat: 1,
	boosters: ["vol6"]
}

export default card
