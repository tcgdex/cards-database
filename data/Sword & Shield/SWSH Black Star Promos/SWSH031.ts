import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Famished",
			fr: "Glouton",
			es: "Hambriento",
			it: "Famelico",
			pt: "Faminto",
			de: "Ausgehungert"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre 1 carta.",
			de: "Ziehe 1 Karte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			es: "Impactrueno",
			it: "Tuonoshock",
			pt: "Trovoada de Choques",
			de: "Donnerschock"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity."
	},

	stage: "Basic",
	dexId: [877],

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
