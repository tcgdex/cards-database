import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Turn the Tables",
				'fr-fr': "Retournement de Situation",
				'es-es': "Cambio de Tornas",
				'it-it': "Ribaltamento",
				'pt-br': "Virada de Mesa",
				'de-de': "Blattwende"
			},
			effect: {
				'en-us': "If 1 of your opponent’s Pokémon used a GX attack during their last turn, your opponent shuffles their Active Pokémon and all cards attached to it into their deck.",
				'fr-fr': "Si l’un des Pokémon de votre adversaire a utilisé une attaque GX pendant son dernier tour, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
				'es-es': "Si 1 de los Pokémon de tu rival usó un ataque GX durante su último turno, tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja y las baraja todas.",
				'it-it': "Se uno dei Pokémon del tuo avversario ha usato un attacco GX durante il suo ultimo turno, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
				'pt-br': "Se 1 dos Pokémon do seu oponente usou um ataque GX durante a última vez dele(a) jogar, seu oponente embaralhará o Pokémon Ativo dele(a) e todas as cartas ligadas a ele no próprio baralho.",
				'de-de': "Wenn ein Pokémon deines Gegners während seines letzten Zuges eine GX-Attacke eingesetzt hat, mischt dein Gegner sein Aktives Pokémon und alle an es angelegten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It's proud of its thick horn. In Alola, its biggest rival is Vikavolt, which it's always fighting with.",
	},

	thirdParty: {
		cardmarket: 388337,
		tcgplayer: 195059
	}
}

export default card
