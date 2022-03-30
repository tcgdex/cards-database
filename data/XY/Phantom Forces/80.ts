import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		113,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit'Sieste",
				es: "Siesta",
				it: "Pausa",
				pt: "Soneca",
				de: "Nickerchen"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 de danos deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lucky Punch",
				fr: "Poing Chance",
				es: "Puño Suerte",
				it: "Fortunpugno",
				pt: "Soco da Sorte",
				de: "Lucky Punch"
			},
			effect: {
				en: "If you don't have exactly 7 cards in your hand, this attack does nothing.",
				fr: "Si vous n'avez pas exactement 7 cartes dans votre main, cette attaque ne fait rien.",
				es: "Si no tienes exactamente 7 cartas en tu mano, este ataque no hace nada.",
				it: "Se non hai esattamente sette carte in mano, questo attacco non ha effetto.",
				pt: "Se você não tiver exatamente 7 cards na mão, esse ataque não fará nada.",
				de: "Dieser Angriff hat keine Auswirkungen, wenn du nicht genau 7 Karten auf der Hand hast."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
