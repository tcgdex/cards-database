import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},
	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magnetic Draw",
				fr: "Pioche Magnétique",
				es: "Magnetorobo",
				it: "Magnetopesca",
				pt: "Comprada Magnética",
				de: "Magnet-Zieher"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 4 cards in your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 4 cartes en main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 4 cartas en tu mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare delle carte fino ad averne quattro in mano.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá comprar cards até ter 4 cards na mão.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du so viele Karten ziehen, bis du 4 Karten auf der Hand hast."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
