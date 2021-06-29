import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Morpeko",
		en: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Glouton",
			en: "Famished",
			es: "Hambriento",
			it: "Famelico",
			pt: "Faminto",
			de: "Ausgehungert"
		},

		effect: {
			fr: "Piochez une carte.",
			en: "Draw a card.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre 1 carta.",
			de: "Ziehe 1 Karte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Éclair",
			en: "Thunder Shock",
			es: "Impactrueno",
			it: "Tuonoshock",
			pt: "Trovoada de Choques",
			de: "Donnerschock"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
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
	regulationMark: "D"
}

export default card