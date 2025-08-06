import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Atsushi Furusawa",
	category: "Pokemon",

	description: {
		en: "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity."
	},

	stage: "Basic",

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		de: "Morpeko",
		es: "Morpeko",
		pt: "Morpeko",
		it: "Morpeko"
	},

	rarity: "None",
	dexId: [877],
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Famished",
			fr: "Glouton",
			de: "Ausgehungert",
			es: "Hambriento",
			pt: "Faminto",
			it: "Famelico"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			pt: "Compre 1 carta.",
			it: "Pesca una carta."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			de: "Donnerschock",
			es: "Impactrueno",
			pt: "Trovoada de Choques",
			it: "Tuonoshock"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato."
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
