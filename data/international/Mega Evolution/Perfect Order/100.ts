import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [724],

	name: {
		'en-us': "Decidueye ex",
		'fr-fr': "Archéduc-ex",
		'es-es': "Decidueye ex",
		'es-mx': "Decidueye ex",
		'de-de': "Silvarro-ex",
		'it-it': "Decidueye-ex",
		'pt-br': "Decidueye ex"
	},
	evolveFrom: {
		'en-us': "Dartrix",
		'de-de': "Arboretoss",
		'es-es': "Dartrix",
		'fr-fr': "Efflèche",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sniper's Eye",
			'fr-fr': "Œil de Sniper",
			'es-es': "Ojo Certero",
			'es-mx': "Ojo Certero",
			'de-de': "Auge des Superschützen",
			'it-it': "Occhio da Cecchino",
			'pt-br': "Mira de Franco-atirador"
		},

		effect: {
			'en-us': "If your opponent has exactly 4 cards in their hand, ignore all {C} Energy in the costs of attacks used by this Pokémon.",
			'fr-fr': "Si votre adversaire a exactement 4 cartes dans sa main, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon.",
			'es-es': "Si tu rival tiene exactamente 4 cartas en su mano, ignora todas las Energías {C} en los costes de los ataques usados por este Pokémon.",
			'es-mx': "Si tu rival tiene exactamente 4 cartas en su mano, ignora todas las Energías {C} en los costos de los ataques usados por este Pokémon.",
			'de-de': "Wenn dein Gegner genau 4 Karten auf seiner Hand hat, ignoriere alle {C}-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken.",
			'it-it': "Se il tuo avversario ha esattamente quattro carte in mano, ignora tutte le Energie {C} necessarie per gli attacchi usati da questo Pokémon.",
			'pt-br': "Se o seu oponente tiver exatamente 4 cartas na mão dele, ignore todas as Energias {C} nos custos dos ataques usados por este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Crushing Arrow",
			'fr-fr': "Flèche Écrasante",
			'es-es': "Flecha Demoledora",
			'es-mx': "Flecha Demoledora",
			'de-de': "Schmetterpfeil",
			'it-it': "Freccia Dirompente",
			'pt-br': "Flecha Esmagadora"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684371,
				cardmarket: 877517
			}
		}
	],

}

export default card
