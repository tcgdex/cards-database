import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Morgrem",
		fr: "Fourbelin",
		es: "Morgrem",
		it: "Morgrem",
		pt: "Morgrem",
		de: "Pelzebub"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Impidimp",
		fr: "Grimalin",
		es: "Impidimp",
		it: "Impidimp",
		pt: "Impidimp",
		de: "Bähmon"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		en: "With sly cunning, it tries to lure people into the woods. Some believe it to have the power to make crops grow."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			pt: "Mordida",
			it: "Morso"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Crushing Blow",
			fr: "Coup Écrasant",
			de: "Brechschlag",
			es: "Demoler",
			pt: "Golpe Esmagador",
			it: "Assalto Sbaragliante"
		},

		damage: 40,

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card