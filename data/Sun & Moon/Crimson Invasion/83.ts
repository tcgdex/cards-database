import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Staraptor",
		fr: "Étouraptor",
		es: "Staraptor",
		it: "Staraptor",
		pt: "Staraptor",
		de: "Staraptor"
	},
	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		398,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
				es: "Embrague",
				it: "Grinfie",
				pt: "Agarramento",
				de: "Greifer"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Hunting",
				fr: "Chasse Aérienne",
				es: "Caza Aérea",
				it: "Aerocaccia",
				pt: "Caça pelos Céus",
				de: "Luftjagd"
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by the damage from this attack, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, scambia questo Pokémon con uno della tua panchina.",
				pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Wenn das Pokémon deines Gegners durch den Schaden dieser Attacke kampfunfähig wird, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
