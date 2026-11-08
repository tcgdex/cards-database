import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		'en-us': "Noivern",
		'fr-fr': "Bruyverne",
		'es-es': "Noivern",
		'de-de': "UHaFnir",
		'it-it': "Noivern",
		'pt-br': "Noivern",
		'es-mx': "Noivern"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'de-de': "eF-eM",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'es-mx': "Noibat"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Tuning Echo",
			'fr-fr': "Écho Calibration",
			'es-es': "Eco Sintonizador",
			'de-de': "Angleichendes Echo",
			'it-it': "Ecosintonia",
			'pt-br': "Eco Sintonizador",
			'es-mx': "Eco Sintonizador"
		},

		effect: {
			'en-us': "If you have the same number of cards in your hand as your opponent, ignore all Energy in the cost of Frightening Howl used by this Pokémon.",
			'fr-fr': "Si vous avez le même nombre de cartes en main que votre adversaire, ignorez toutes les Énergies dans le coût de Hurlement Effrayant utilisée par ce Pokémon.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, ignora todas las Energías en el coste del ataque Aullido Aterrador usado por este Pokémon.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, ignoriere alle Energien in den Kosten der von diesem Pokémon eingesetzten Attacke Furchterregender Heuler.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, ignora tutte le Energie necessarie per l'attacco Urlo Terrificante usato da questo Pokémon.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, ignore todas as Energias no custo de Uivo Pavoroso usado por este Pokémon.",
			'es-mx': "Si tienes la misma cantidad de cartas en tu mano que tu rival, ignora todas las Energías en el costo del ataque Aullido Aterrador usado por este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Frightening Howl",
			'fr-fr': "Hurlement Effrayant",
			'es-es': "Aullido Aterrador",
			'de-de': "Furchterregender Heuler",
			'it-it': "Urlo Terrificante",
			'pt-br': "Uivo Pavoroso",
			'es-mx': "Aullido Aterrador"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "I",
	illustrator: "Anesaki Dynamic",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817280,
				tcgplayer: 623555
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817280,
				tcgplayer: 623555
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 819253,
			}
		},
	],
}

export default card
