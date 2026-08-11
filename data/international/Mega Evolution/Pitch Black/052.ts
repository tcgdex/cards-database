import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
		'es-es': "Malamar",
		'es-mx': "Malamar",
		'de-de': "Calamanero",
		'it-it': "Malamar",
		'pt-br': "Malamar"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [687],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Inkay"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Perplex",
			'fr-fr': "Affolement",
			'es-es': "Desconcierto",
			'es-mx': "Desconcierto",
			'de-de': "Perplex",
			'it-it': "Sconcerto",
			'pt-br': "Perplexo"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}, {
		name: {
			'en-us': "Brain Crush",
			'fr-fr': "Écrasement Cérébral",
			'es-es': "Aplastamiento Cerebral",
			'es-mx': "Aplastamiento Cerebral",
			'de-de': "Gehirngewalt",
			'it-it': "Sgretolamente",
			'pt-br': "Colapso Cerebral"
		},

		cost: ["Darkness"],

		damage: 130,

		effect: {
			'en-us': "If your opponent's Active Pokémon isn't Confused, this attack does nothing.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire n'est pas Confus, cette attaque ne fait rien.",
			'es-es': "Si el Pokémon Activo de tu rival no está Confundido, este ataque no hace nada.",
			'es-mx': "Si el Pokémon Activo de tu rival no está Confundido, este ataque no hace nada.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners nicht verwirrt ist, hat diese Attacke keine Auswirkungen.",
			'it-it': "Se il Pokémon attivo del tuo avversario non è confuso, questo attacco non ha effetto.",
			'pt-br': "Se o Pokémon Ativo do seu oponente não estiver Confuso, este ataque não fará nada."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895837,
				tcgplayer: 704809
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895837,
				tcgplayer: 704809
			}
		},
	],
}

export default card
