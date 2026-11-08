import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		'en-us': "Wiglett",
		'fr-fr': "Taupikeau",
		'es-es': "Wiglett",
		'it-it': "Wiglett",
		'pt-br': "Wiglett",
		'de-de': "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Lucky Find",
			'fr-fr': "Trouvaille Inespérée",
			'es-es': "Hallazgo Afortunado",
			'it-it': "Ritrovamento Fortunato",
			'pt-br': "Descoberta Sortuda",
			'de-de': "Glücksfund"
		},

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Aqua Bomb",
			'fr-fr': "Aqua Bombe",
			'es-es': "Bomba de Agua",
			'it-it': "Acquabomba",
			'pt-br': "Bomba Aquática",
			'de-de': "Wasserbombe"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760677,
				tcgplayer: 542791
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760677,
				tcgplayer: 542791
			}
		},
	],

	illustrator: "OKUBO",

}

export default card