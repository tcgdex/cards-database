import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Atsushi Furusawa",
	category: "Pokemon",

	description: {
		'en-us': "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity."
	},

	stage: "Basic",

	name: {
		'en-us': "Morpeko",
		'fr-fr': "Morpeko",
		'de-de': "Morpeko",
		'es-es': "Morpeko",
		'pt-br': "Morpeko",
		'it-it': "Morpeko"
	},

	rarity: "Promo",
	dexId: [877],
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Famished",
			'fr-fr': "Glouton",
			'de-de': "Ausgehungert",
			'es-es': "Hambriento",
			'pt-br': "Faminto",
			'it-it': "Famelico"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre 1 carta.",
			'it-it': "Pesca una carta."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'de-de': "Donnerschock",
			'es-es': "Impactrueno",
			'pt-br': "Trovoada de Choques",
			'it-it': "Tuonoshock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato."
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 427106
	}
}

export default card
