import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Barbaracle",
		'fr-fr': "Golgopathe",
		'es-es': "Barbaracle",
		'it-it': "Barbaracle",
		'pt-br': "Barbaracle",
		'de-de': "Thanathora"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		689,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Seven Shock",
				'fr-fr': "Choc à Sept",
				'es-es': "Impacto Siete",
				'it-it': "Eptashock",
				'pt-br': "Choque do Sete",
				'de-de': "Siebenschock"
			},
			effect: {
				'en-us': "If you have exactly 7 cards in your hand, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "S’il vous reste exactement 7 cartes en main, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Si tienes exactamente 7 cartas en tu mano, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Se hai esattamente sette carte in mano, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Se você tiver exatamente 7 cartas na sua mão, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wenn du genau 7 Karten auf deiner Hand hast, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch’Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Barbaracle's legs and hands have minds of their own, and they will move independently. But they usually follow the head's orders.",
	},

	thirdParty: {
		cardmarket: 355585,
		tcgplayer: 165719
	}
}

export default card
