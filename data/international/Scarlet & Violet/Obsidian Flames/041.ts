import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		'fr-fr': "Pyrax",
		'en-us': "Volcarona",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Pyronille",
		'en-us': "Larvesta",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Manteau de Feu",
			'en-us': "Flame Cloak",
			'es-es': "Manto Ígneo",
			'it-it': "Radunafuoco",
			'pt-br': "Manto de Chamas",
			'de-de': "Flammenumhang"
		},

		effect: {
			'fr-fr': "Attachez une carte Énergie {R} de base de votre pile de défausse à ce Pokémon.",
			'en-us': "Attach a Basic {R} Energy card from your discard pile to this Pokémon.",
			'es-es': "Une 1 carta de Energía {R} Básica de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia base {R} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {R} Básica da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 Basis-{R}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Explosion de Chaleur",
			'en-us': "Heat Blast",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 130
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
		'en-us': "Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725121,
				tcgplayer: 509747,
				cardtrader: 255601
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725121,
				tcgplayer: 509747,
				cardtrader: 255601
			}
		},
	],

	illustrator: "Yukiko Baba",

	
}

export default card
