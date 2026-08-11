import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [451],

	name: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
		'es-es': "Skorupi",
		'es-mx': "Skorupi",
		'de-de': "Pionskora",
		'it-it': "Skorupi",
		'pt-br': "Skorupi"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

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

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684432,
				cardmarket: 877467
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684432,
				cardmarket: 877467
			}
		}
	],

}

export default card
