import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		de: "UHaFnir",
		it: "Noivern",
		pt: "Noivern",
		'es-mx': "Noivern"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tuning Echo",
			fr: "Écho Calibration",
			es: "Eco Sintonizador",
			de: "Angleichendes Echo",
			it: "Ecosintonia",
			pt: "Eco Sintonizador",
			'es-mx': "Eco Sintonizador"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, ignore all Energy in the cost of Frightening Howl used by this Pokémon.",
			fr: "Si vous avez le même nombre de cartes en main que votre adversaire, ignorez toutes les Énergies dans le coût de Hurlement Effrayant utilisée par ce Pokémon.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, ignora todas las Energías en el coste del ataque Aullido Aterrador usado por este Pokémon.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, ignoriere alle Energien in den Kosten der von diesem Pokémon eingesetzten Attacke Furchterregender Heuler.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, ignora tutte le Energie necessarie per l'attacco Urlo Terrificante usato da questo Pokémon.",
			pt: "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, ignore todas as Energias no custo de Uivo Pavoroso usado por este Pokémon.",
			'es-mx': "Si tienes la misma cantidad de cartas en tu mano que tu rival, ignora todas las Energías en el costo del ataque Aullido Aterrador usado por este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Frightening Howl",
			fr: "Hurlement Effrayant",
			es: "Aullido Aterrador",
			de: "Furchterregender Heuler",
			it: "Urlo Terrificante",
			pt: "Uivo Pavoroso",
			'es-mx': "Aullido Aterrador"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 110
	}],

	retreat: 0,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
