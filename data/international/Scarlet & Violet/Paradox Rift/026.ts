import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [935],
	set: Set,

	name: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fiery Fighting Spirit",
			'fr-fr': "Combativité Ardente",
			'es-es': "Espíritu de Lucha Ardiente",
			'it-it': "Fuocospirito Combattivo",
			'pt-br': "Espírito de Luta Incandescente",
			'de-de': "Feuriger Kampfgeist"
		},

		effect: {
			'en-us': "Search your deck for a Basic {R} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {R} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {R} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {R} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia {R} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Knuckle Punch",
			'fr-fr': "Coud'Phalange",
			'es-es': "Puño con Nudillos",
			'it-it': "Noccapugno",
			'pt-br': "Soco com Punho",
			'de-de': "Knöchelhieb"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740502,
				tcgplayer: 523634,
				cardtrader: 265073
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740502,
				tcgplayer: 523634,
				cardtrader: 265073
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card
