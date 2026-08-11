import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [689],
	set: Set,

	name: {
		'en-us': "Barbaracle",
		'fr-fr': "Golgopathe",
		'es-es': "Barbaracle",
		'it-it': "Barbaracle",
		'pt-br': "Barbaracle",
		'de-de': "Thanathora"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'it-it': "Binacle",
		'pt-br': "Binacle",
		'de-de': "Bithora"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lost Block",
			'fr-fr': "Bloc Perdu",
			'es-es': "Bloqueo Perdido",
			'it-it': "Blocco Perduto",
			'pt-br': "Bloqueio Perdido",
			'de-de': "Nirgendwo-Blockade"
		},

		effect: {
			'en-us': "Your opponent puts any Prize cards they would take in the Lost Zone instead of into their hand.",
			'fr-fr': "Votre adversaire place toute carte Récompense qu'il récupérerait dans la Zone Perdue plutôt que dans sa main.",
			'es-es': "Tu rival pone en la Zona Perdida, en vez de en su mano, cualquier carta de Premio que fuera a coger.",
			'it-it': "Il tuo avversario mette qualsiasi carta Premio che avrebbe preso nell'area perduta, invece che nella propria mano.",
			'pt-br': "Seu oponente coloca quaisquer cartas de Prêmio que ele(a) pegaria na Zona Perdida ao invés da própria mão.",
			'de-de': "Dein Gegner legt alle Preiskarten, die er auf seine Hand nehmen würde, stattdessen ins Nirgendwo."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Dynamic Chop",
			'fr-fr': "Coupe Dynamique",
			'es-es': "Golpe Dinámico",
			'it-it': "Dinamicolpo",
			'pt-br': "Golpe Dinâmico",
			'de-de': "Wuchthieb"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674120,
				tcgplayer: 284002
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674120,
				tcgplayer: 284002
			}
		},
	],
}

export default card
