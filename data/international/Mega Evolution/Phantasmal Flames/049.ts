import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'es-mx': "Gligar",
		'de-de': "Skorgla",
		'it-it': "Gligar",
		'pt-br': "Gligar"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [207],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Poison Jab",
			'fr-fr': "Direct Toxik",
			'es-es': "Puya Nociva",
			'es-mx': "Golpe Venenoso",
			'de-de': "Gifthieb",
			'it-it': "Velenpuntura",
			'pt-br': "Golpe Envenenado"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It builds its nest on a steep cliff. When it is done gliding, it hops along the ground back to its nest.",
	},

	illustrator: "Kazumasa Yasukuni",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857624,
				tcgplayer: 662162,
				cardtrader: 356832
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857624,
				tcgplayer: 662162,
				cardtrader: 356832
			}
		},
	],	
}

export default card
