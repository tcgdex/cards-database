import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [472],
	set: Set,

	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'es-es': "Gliscor",
		'it-it': "Gliscor",
		'pt-br': "Gliscor",
		'de-de': "Skorgro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "SATOSHI NAKAI",

	description: {
		'en-us': "Its flight is soundless. It uses its lengthy tail to carry off its prey... Then its elongated fangs do the rest."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Cut Down",
			'fr-fr': "Retranchement",
			'de-de': "Umsägen",
			'es-es': "Recorte",
			'pt-br': "Corte",
			'it-it': "Falciare"
		},

		damage: 30,

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Venomous Hit",
			'fr-fr': "Frappe Venimeuse",
			'de-de': "Giftiger Schlag",
			'es-es': "Golpe Venenoso",
			'pt-br': "Golpe Venenoso",
			'it-it': "Colpo Velenoso"
		},

		damage: 100,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582755,
				tcgplayer: 253350
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582755,
				tcgplayer: 253350
			}
		},
	],
}

export default card
