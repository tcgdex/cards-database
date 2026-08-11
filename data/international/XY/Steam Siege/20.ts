import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Infernape",
		'fr-fr': "Simiabraz",
		'es-es': "Infernape",
		'it-it': "Infernape",
		'pt-br': "Infernape",
		'de-de': "Panferno"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		392,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'es-es': "Monferno",
		'it-it': "Monferno",
		'pt-br': "Monferno",
		'de-de': "Panpyro"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flare Blitz",
				'fr-fr': "Boutefeu",
				'es-es': "Envite Ígneo",
				'it-it': "Fuococarica",
				'pt-br': "Blitz de Labaredas",
				'de-de': "Flammenblitz"
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
				'es-es': "Descarta todas las Energías Fire unidas a este Pokémon.",
				'it-it': "Scarta tutte le Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte toda a Energia Fire ligada a este Pokémon.",
				'de-de': "Lege alle an dieses Pokémon angelegten Fire-Energien auf deinen Ablagestapel."
			},
			damage: 120,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flare Up",
				'fr-fr': "Prise de Bec",
				'es-es': "Ignición",
				'it-it': "Mangiafiamme",
				'pt-br': "Incandescer",
				'de-de': "Aufflammen"
			},
			effect: {
				'en-us': "If you have fewer than 10 Fire Energy cards in your discard pile, this attack does nothing. Shuffle 10 Fire Energy cards from your discard pile into your deck.",
				'fr-fr': "Si vous avez moins de 10 cartes Énergie Fire dans votre pile de défausse, cette attaque ne fait rien. Mélangez 10 cartes Énergie Fire de votre pile de défausse avec votre deck.",
				'es-es': "Si tienes menos de 10 cartas de Energía Fire en tu pila de descartes, este ataque no hace nada. Pon 10 cartas de Energía Fire de tu pila de descartes en tu baraja y barájalas todas.",
				'it-it': "Se hai meno di dieci carte Energia Fire nella tua pila degli scarti, questo attacco non ha effetto. Rimischia dieci carte Energia Fire dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Se você possuir menos de 10 cards de Energia Fire na sua pilha de descarte, este ataque não fará nada. Embaralhe 10 cards de Energia Fire da sua pilha de descarte em seu baralho.",
				'de-de': "Wenn du weniger als 10 Fire-Energiekarten in deinem Ablagestapel hast, hat dieser Angriff keine Auswirkungen. Mische 10 Fire-Energiekarten aus deinem Ablagestapel in dein Deck."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It tosses its enemies around with agility. It uses all its limbs to fight in its own unique style.",
	},

	thirdParty: {
		cardmarket: 291615,
		tcgplayer: 121009
	}
}

export default card
