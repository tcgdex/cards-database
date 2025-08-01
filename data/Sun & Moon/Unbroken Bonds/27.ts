import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Litten",
		fr: "Flamiaou",
		es: "Litten",
		it: "Litten",
		pt: "Litten",
		de: "Flamiau"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		725,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Caturday",
				fr: "Chamedi",
				es: "Sábado Gatuno",
				it: "Giornogatto",
				pt: "Dia de Gato",
				de: "Schnurrtag"
			},
			effect: {
				en: "Draw a card. If you do, this Pokémon is now Asleep.",
				fr: "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
				es: "Roba 1 carta. Si lo haces, este Pokémon pasa a estar Dormido.",
				it: "Pesca una carta. Se lo fai, questo Pokémon viene addormentato.",
				pt: "Compre 1 carta. Se fizer isto, este Pokémon será Adormecido.",
				de: "Ziehe 1 Karte. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse Morsure",
				es: "Gran Mordisco",
				it: "Grande Morso",
				pt: "Mordidona",
				de: "Mächtiger Biss"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372318
	}
}

export default card
