import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'fr-fr': "Pikachu",
		'en-us': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Chargeur",
			'en-us': "Charge",
			'es-es': "Carga",
			'it-it': "Sottocarica",
			'pt-br': "Carga",
			'de-de': "Ladevorgang"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Énergie {L} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {L} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia {L} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{L}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Pika-Poing",
			'en-us': "Pika Punch",
			'es-es': "Pika Puño",
			'it-it': "Pika Pugno",
			'pt-br': "Soco Pikachu",
			'de-de': "Pikahieb"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733620,
				tcgplayer: 517033,
				cardtrader: 261140
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733620,
				tcgplayer: 517033,
				cardtrader: 261140
			}
		},
		{
			type: 'normal',
			stamp: ['pokemon-together'],
			thirdParty: {
				cardmarket: 748474
			}
		},
		{
			type: 'normal',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 845404
			}
		},
		{
			type: 'reverse',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 794911
			}
		},
	],

	illustrator: "Naoyo Kimura",

	
}

export default card
