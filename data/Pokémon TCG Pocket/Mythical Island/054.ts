import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Whirlipede",
		fr: "Scobolide",
		es: "Whirlipede",
		it: "Whirlipede",
		de: "Rollum",
		'pt-br': "Whirlipede",
		ko: "휠구"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",

	dexId: [544],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Venipede"
	},

	description: {
		en: "This Pokémon spins itself rapidly and charges into its opponents. Its top speed is just over 60 mph.",
		fr: "Il se propulse sur ses ennemis en tournant\ntrès vite sur lui-même. Il peut ainsi atteindre\nune vitesse d'environ 100 km/h.",
		es: "Gira a gran velocidad y carga contra sus\nrivales. Puede alcanzar los 100 km/h.",
		it: "Attacca l'avversario turbinando rapidamente su se\nstesso. Può raggiungere una velocità di circa 100 km/h.",
		de: "Rollum dreht sich mit hoher Geschwindigkeit\nund rammt seine Gegner. Dabei erreicht es\nGeschwindigkeiten von bis zu 100 km/h.",
		'pt-br': "Este Pokémon gira o corpo rapidamente e ataca seus oponentes.\nSua velocidade máxima é de pouco mais de 100 km/h.",
		ko: "고속으로 회전해 상대에게\n돌격한다. 최고 시속은\n약 100km에 달한다."
	},

	stage: "Stage1",

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

		damage: 20,
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
	rarity: "One Diamond"
}

export default card
