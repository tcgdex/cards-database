import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
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
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
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
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
				es: "Golpe Cuchillazo",
				it: "Lacerattacco",
				pt: "Ataque Cortante",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "This Pokémon can’t use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Golpe Cuchillazo durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
				pt: "Este Pokémon não poderá usar Ataque Cortante durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Schlitzender Schlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 80,

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
		cardmarket: 408324
	}
}

export default card
