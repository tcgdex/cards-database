import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Corner",
				fr: "Coinçage",
				es: "Arrinconar",
				it: "Trappola",
				pt: "Quina",
				de: "Bedrängen"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Night Claw",
				fr: "Griffe Nocturne",
				es: "Garra Nocturna",
				it: "Artiglio Notte",
				pt: "Garra Noturna",
				de: "Nachtklaue"
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies attachées à ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cruz, descarta 2 Energías unidas a este Pokémon.",
				it: "Lancia una moneta. Se esce croce, scarta due Energie assegnate a questo Pokémon.",
				pt: "Jogue uma moeda. Se sair coroa, descarte 2 Energias ligadas a este Pokémon.",
				de: "Wirf 1 Münze. Lege bei \"Zahl\" 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281410
	}
}

export default card
