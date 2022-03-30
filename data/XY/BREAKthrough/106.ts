import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
		es: "Aromatisse",
		it: "Aromatisse",
		pt: "Aromatisse",
		de: "Parfinesse"
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		683,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
		es: "Spritzee",
		it: "Spritzee",
		pt: "Spritzee",
		de: "Parfi"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Heavy Perfume",
				fr: "Parfum Enivrant",
				es: "Fuerte Perfume",
				it: "Profumo Pesante",
				pt: "Perfume Intenso",
				de: "Strenges Parfüm"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused. Put 6 damage counters instead of 3 on that Pokémon for this Special Condition.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Placez 6 marqueurs de dégâts au lieu de 3 sur le Pokémon ciblé pour cet État Spécial.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido. Pon 6 contadores de daño en vez de 3 en ese Pokémon por esta Condición Especial.",
				it: "Il Pokémon attivo del tuo avversario viene confuso. Metti sei segnalini danno invece di tre su quel Pokémon per questa condizione speciale.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso. Coloque 6 contadores de danos em vez de 3 naquele Pokémon para esta Condição Especial.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Lege für diesen Speziellen Zustand 6 Schadensmarken anstelle von 3 Schadensmarken auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Fairy",
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
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
