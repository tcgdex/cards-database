import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'de-de': "Tangela",
		'it-it': "Tangela",
		'es-es': "Tangela",
		'pt-br': "Tangela",
		'es-mx': "Tangela"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [114],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Poison Powder",
			'fr-fr': "Poudre Toxik",
			'de-de': "Giftpuder",
			'it-it': "Velenpolvere",
			'es-es': "Polvo Veneno",
			'pt-br': "Pó Venenoso",
			'es-mx': "Polvo Venenoso"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Hook",
			'fr-fr': "Crochet",
			'de-de': "Haken",
			'it-it': "Uncino",
			'es-es': "Garfio",
			'pt-br': "Gancho",
			'es-mx': "Gancho"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851077,
				tcgplayer: 654345
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851077,
				tcgplayer: 654345
			}
		},
	],
}

export default card
