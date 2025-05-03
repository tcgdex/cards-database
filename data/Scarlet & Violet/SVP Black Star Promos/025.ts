import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatink",
		fr: "Forgerette",
		es: "Tinkatink",
		it: "Tinkatink",
		pt: "Tinkatink",
		de: "Forgita"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Smithereen Smash",
			fr: "Pulvérisation",
			es: "Machaque",
			it: "Frammentazione",
			pt: "Pancada Estilhaçante",
			de: "Splitterschlag"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card