import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		604,
	],
	hp: 150,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Electric Swamp",
				fr: "Marais Électrique",
				es: "Pantano Eléctrico",
				it: "Stagno Elettrico",
				pt: "Pântano Elétrico",
				de: "Elektrosumpf"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your hand and you have at least 4 Lightning Energy cards in play, you may play this Pokémon onto your Bench. If you do, move any number of Lightning Energy from your other Pokémon to this Pokémon.",
				fr: "Jouez ce Pokémon sur votre Banc.",
				es: "Pon este Pokémon en tu Banca.",
				it: "Metti questo Pokémon nella tua panchina.",
				pt: "Coloque este Pokémon no seu Banco.",
				de: "Lege dieses Pokémon auf deine Bank."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hover Over",
				fr: "Flotter",
				es: "Planear por Encima",
				it: "Volteggiare",
				pt: "Flutuar Acima",
				de: "Belauern"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 130,

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
