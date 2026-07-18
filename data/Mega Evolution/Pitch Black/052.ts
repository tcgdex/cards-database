import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		'es-mx': "Malamar",
		de: "Calamanero",
		it: "Malamar",
		pt: "Malamar"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [687],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Inkay"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Perplex",
			fr: "Affolement",
			es: "Desconcierto",
			'es-mx': "Desconcierto",
			de: "Perplex",
			it: "Sconcerto",
			pt: "Perplexo"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}, {
		name: {
			en: "Brain Crush",
			fr: "Écrasement Cérébral",
			es: "Aplastamiento Cerebral",
			'es-mx': "Aplastamiento Cerebral",
			de: "Gehirngewalt",
			it: "Sgretolamente",
			pt: "Colapso Cerebral"
		},

		cost: ["Darkness"],

		damage: 130,

		effect: {
			en: "If your opponent's Active Pokémon isn't Confused, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire n'est pas Confus, cette attaque ne fait rien.",
			es: "Si el Pokémon Activo de tu rival no está Confundido, este ataque no hace nada.",
			'es-mx': "Si el Pokémon Activo de tu rival no está Confundido, este ataque no hace nada.",
			de: "Wenn das Aktive Pokémon deines Gegners nicht verwirrt ist, hat diese Attacke keine Auswirkungen.",
			it: "Se il Pokémon attivo del tuo avversario non è confuso, questo attacco non ha effetto.",
			pt: "Se o Pokémon Ativo do seu oponente não estiver Confuso, este ataque não fará nada."
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
