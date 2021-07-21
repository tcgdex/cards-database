import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
		es: "Barbaracle",
		it: "Barbaracle",
		pt: "Barbaracle",
		de: "Thanathora"
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
		en: "Binacle",
		fr: "Opermine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seven Shock",
				fr: "Choc à Sept",
				es: "Impacto Siete",
				it: "Eptashock",
				pt: "Choque do Sete",
				de: "Siebenschock"
			},
			effect: {
				en: "If you have exactly 7 cards in your hand, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "S’il vous reste exactement 7 cartes en main, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Si tienes exactamente 7 cartas en tu mano, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Se hai esattamente sette carte in mano, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Se você tiver exatamente 7 cartas na sua mão, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wenn du genau 7 Karten auf deiner Hand hast, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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
				en: "Claw Slash",
				fr: "Tranch’Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
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



}

export default card
