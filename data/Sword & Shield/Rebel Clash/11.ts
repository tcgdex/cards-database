import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		es: "Masquerain",
		it: "Masquerain",
		pt: "Masquerain",
		de: "Maskeregen"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Threatening Pattern",
				fr: "Motif Menaçant",
				es: "Patrón Amenazador",
				it: "Disegno Minaccioso",
				pt: "Padrão Ameaçador",
				de: "Bedrohliches Muster"
			},
			effect: {
				en: "During your opponent’s next turn, Energy can’t be attached from your opponent’s hand to the Defending Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, de l’Énergie ne peut pas être attachée de la main de votre adversaire au Pokémon Défenseur.",
				es: "Durante el próximo turno de tu rival, no se puede unir Energía de la mano de tu rival al Pokémon Defensor.",
				it: "Durante il prossimo turno del tuo avversario, nessuna Energia può essere assegnata dalla mano del tuo avversario al Pokémon difensore.",
				pt: "Durante o próximo turno do seu oponente, Energias não poderão ser ligadas da mão do seu oponente ao Pokémon Defensor.",
				de: "Während des nächsten Zuges deines Gegners kann keine Energie aus der Hand deines Gegners an das Verteidigende Pokémon angelegt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "U-turn",
				fr: "Demi-Tour",
				es: "Ida y Vuelta",
				it: "Retromarcia",
				pt: "Fazer Retorno",
				de: "Kehrtwende"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
