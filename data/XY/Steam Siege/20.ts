import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
		es: "Infernape",
		it: "Infernape",
		pt: "Infernape",
		de: "Panferno"
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
		en: "Monferno",
		fr: "Chimpenfeu",
		es: "Monferno",
		it: "Monferno",
		pt: "Monferno",
		de: "Panpyro"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
				es: "Envite Ígneo",
				it: "Fuococarica",
				pt: "Blitz de Labaredas",
				de: "Flammenblitz"
			},
			effect: {
				en: "Discard all Fire Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
				es: "Descarta todas las Energías Fire unidas a este Pokémon.",
				it: "Scarta tutte le Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte toda a Energia Fire ligada a este Pokémon.",
				de: "Lege alle an dieses Pokémon angelegten Fire-Energien auf deinen Ablagestapel."
			},
			damage: 120,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Up",
				fr: "Prise de Bec",
				es: "Ignición",
				it: "Mangiafiamme",
				pt: "Incandescer",
				de: "Aufflammen"
			},
			effect: {
				en: "If you have fewer than 10 Fire Energy cards in your discard pile, this attack does nothing. Shuffle 10 Fire Energy cards from your discard pile into your deck.",
				fr: "Si vous avez moins de 10 cartes Énergie Fire dans votre pile de défausse, cette attaque ne fait rien. Mélangez 10 cartes Énergie Fire de votre pile de défausse avec votre deck.",
				es: "Si tienes menos de 10 cartas de Energía Fire en tu pila de descartes, este ataque no hace nada. Pon 10 cartas de Energía Fire de tu pila de descartes en tu baraja y barájalas todas.",
				it: "Se hai meno di dieci carte Energia Fire nella tua pila degli scarti, questo attacco non ha effetto. Rimischia dieci carte Energia Fire dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Se você possuir menos de 10 cards de Energia Fire na sua pilha de descarte, este ataque não fará nada. Embaralhe 10 cards de Energia Fire da sua pilha de descarte em seu baralho.",
				de: "Wenn du weniger als 10 Fire-Energiekarten in deinem Ablagestapel hast, hat dieser Angriff keine Auswirkungen. Mische 10 Fire-Energiekarten aus deinem Ablagestapel in dein Deck."
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

	thirdParty: {
		cardmarket: 291615
	}
}

export default card
