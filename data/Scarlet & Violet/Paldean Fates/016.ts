import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Into the Deep",
			fr: "Dans l'Abysse",
			es: "En lo Profundo",
			it: "Baratro",
			pt: "Nas Profundezas",
			de: "In die Tiefe"
		},

		effect: {
			en: "Put up to 3 Basic Energy cards from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 3 cartes Énergie de base de votre pile de défausse à votre main.",
			es: "Pon hasta 3 cartas de Energía Básica de tu pila de descartes en tu mano.",
			it: "Prendi fino a tre carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 3 cartas de Energia Básica da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 3 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Freeze-Dry",
			fr: "Lyophilisation",
			es: "Liofilización",
			it: "Liofilizzazione",
			pt: "Liofilização",
			de: "Gefriertrockner"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card