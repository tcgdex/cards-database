import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		de: "Skaraborn"
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
				en: "Turn the Tables",
				fr: "Retournement de Situation",
				es: "Cambio de Tornas",
				it: "Ribaltamento",
				pt: "Virada de Mesa",
				de: "Blattwende"
			},
			effect: {
				en: "If 1 of your opponent’s Pokémon used a GX attack during their last turn, your opponent shuffles their Active Pokémon and all cards attached to it into their deck.",
				fr: "Si l’un des Pokémon de votre adversaire a utilisé une attaque GX pendant son dernier tour, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
				es: "Si 1 de los Pokémon de tu rival usó un ataque GX durante su último turno, tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja y las baraja todas.",
				it: "Se uno dei Pokémon del tuo avversario ha usato un attacco GX durante il suo ultimo turno, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
				pt: "Se 1 dos Pokémon do seu oponente usou um ataque GX durante a última vez dele(a) jogar, seu oponente embaralhará o Pokémon Ativo dele(a) e todas as cartas ligadas a ele no próprio baralho.",
				de: "Wenn ein Pokémon deines Gegners während seines letzten Zuges eine GX-Attacke eingesetzt hat, mischt dein Gegner sein Aktives Pokémon und alle an es angelegten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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

	thirdParty: {
		cardmarket: 388337
	}
}

export default card
