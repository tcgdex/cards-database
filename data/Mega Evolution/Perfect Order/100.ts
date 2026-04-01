import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Decidueye ex",
		fr: "Archéduc-ex",
		es: "Decidueye ex",
		'es-mx': "Decidueye ex",
		de: "Silvarro-ex",
		it: "Decidueye-ex",
		pt: "Decidueye ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sniper's Eye",
			fr: "Œil de Sniper",
			es: "Ojo Certero",
			'es-mx': "Ojo Certero",
			de: "Auge des Superschützen",
			it: "Occhio da Cecchino",
			pt: "Mira de Franco-atirador"
		},

		effect: {
			en: "If your opponent has exactly 4 cards in their hand, ignore all {C} Energy in the costs of attacks used by this Pokémon.",
			fr: "Si votre adversaire a exactement 4 cartes dans sa main, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon.",
			es: "Si tu rival tiene exactamente 4 cartas en su mano, ignora todas las Energías {C} en los costes de los ataques usados por este Pokémon.",
			'es-mx': "Si tu rival tiene exactamente 4 cartas en su mano, ignora todas las Energías {C} en los costos de los ataques usados por este Pokémon.",
			de: "Wenn dein Gegner genau 4 Karten auf seiner Hand hat, ignoriere alle {C}-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken.",
			it: "Se il tuo avversario ha esattamente quattro carte in mano, ignora tutte le Energie {C} necessarie per gli attacchi usati da questo Pokémon.",
			pt: "Se o seu oponente tiver exatamente 4 cartas na mão dele, ignore todas as Energias {C} nos custos dos ataques usados por este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Crushing Arrow",
			fr: "Flèche Écrasante",
			es: "Flecha Demoledora",
			'es-mx': "Flecha Demoledora",
			de: "Schmetterpfeil",
			it: "Freccia Dirompente",
			pt: "Flecha Esmagadora"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente."
		},

		damage: 240
	}],

	retreat: 2,
	regulationMark: "J"
}

export default card