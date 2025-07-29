import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Cosmog",
		fr: "Cosmog",
		es: "Cosmog",
		it: "Cosmog",
		pt: "Cosmog",
		de: "Cosmog"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		789,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unaware",
				fr: "Inconscient",
				es: "Ignorante",
				it: "Imprudenza",
				pt: "Ignorante",
				de: "Unkenntnis"
			},
			effect: {
				en: "Prevent all effects of your opponent’s attacks, except damage, done to this Pokémon.",
				fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon.",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				pt: "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				de: "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				es: "Ataque Sorpresa",
				it: "Attacco a Sorpresa",
				pt: "Ataque Surpresa",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408139
	}
}

export default card
