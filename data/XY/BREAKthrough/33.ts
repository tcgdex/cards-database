import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery",
		es: "Octillery",
		it: "Octillery",
		pt: "Octillery",
		de: "Octillery"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		224,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Remoraid",
		fr: "Rémoraid",
		es: "Remoraid",
		it: "Remoraid",
		pt: "Remoraid",
		de: "Remoraid"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Abyssal Hand",
				fr: "Main Abyssale",
				es: "Mano Abismal",
				it: "Manoabissale",
				pt: "Mão Abissal",
				de: "Abgrundtiefe Hand"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 5 cards in your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 5 cartes en main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere cinque carte in mano.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá comprar cards até ter 5 cards na mão.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du so viele Karten ziehen, bis du 5 Karten auf der Hand hast."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hug",
				fr: "Câlin",
				es: "Abrazo",
				it: "Abbraccio",
				pt: "Abraço",
				de: "Hug"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
