import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [137],
	set: Set,

	name: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Data Displacement",
			fr: "Déplacement de Données",
			es: "Desplazamiento de Datos",
			it: "Spostamento Dati",
			pt: "Deslocamento de Dados",
			de: "Datenverlagerung"
		},

		effect: {
			en: "Flip a coin. If heads, move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Lancez une pièce. Si c'est face, déplacez une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			es: "Lanza 1 moneda. Si sale cara, mueve 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			it: "Lancia una moneta. Se esce testa, sposta un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			pt: "Jogue uma moeda. Se sair cara, mova uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele.",
			de: "Wirf 1 Münze. Verschiebe bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card