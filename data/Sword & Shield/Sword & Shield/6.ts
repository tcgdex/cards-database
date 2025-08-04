import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee",
		de: "Waumboll"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cotton Ride",
				fr: "Chevauchée Cotonneuse",
				es: "Viaje Algodón",
				it: "Cavalca Cotone",
				pt: "Passeio de Algodão",
				de: "Baumwollritt"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire mélange avec son deck son Pokémon Actif et toutes les cartes attachées.",
				es: "Lanza 1 moneda. Si sale cara, tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja y las baraja todas.",
				it: "Lancia una moneta. Se esce testa, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
				pt: "Jogue 1 moeda. Se sair cara, seu oponente embaralhará o Pokémon Ativo dele(a) e todas as cartas ligadas a ele no próprio baralho.",
				de: "Wirf 1 Münze. Bei Kopf mischt dein Gegner sein Aktives Pokémon und alle angelegten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Step",
				fr: "Enjambée de Feuillage",
				es: "Paso Hoja",
				it: "Passofoglia",
				pt: "Passo de Folha",
				de: "Blattschritt"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "It scatters cotton all over the place as a prank. If it gets wet, it'll become too heavy to move and have no choice but to answer for its mischief."
	},

	thirdParty: {
		cardmarket: 436209,
		tcgplayer: 208272
	}
}

export default card
