import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'es-es': "Octillery",
		'it-it': "Octillery",
		'pt-br': "Octillery",
		'de-de': "Octillery"
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
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'de-de': "Remoraid"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Abyssal Hand",
				'fr-fr': "Main Abyssale",
				'es-es': "Mano Abismal",
				'it-it': "Manoabissale",
				'pt-br': "Mão Abissal",
				'de-de': "Abgrundtiefe Hand"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw cards until you have 5 cards in your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 5 cartes en main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere cinque carte in mano.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá comprar cards até ter 5 cards na mão.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du so viele Karten ziehen, bis du 5 Karten auf der Hand hast."
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
				'en-us': "Hug",
				'fr-fr': "Câlin",
				'es-es': "Abrazo",
				'it-it': "Abbraccio",
				'pt-br': "Abraço",
				'de-de': "Hug"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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

	description: {
		'en-us': "It traps foes with the suction cups on its tentacles, then smashes them with its rock-hard head.",
	},

	thirdParty: {
		cardmarket: 286279,
		tcgplayer: 107152
	}
}

export default card
