import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Aromatisse",
		'fr-fr': "Cocotine",
		'es-es': "Aromatisse",
		'it-it': "Aromatisse",
		'pt-br': "Aromatisse",
		'de-de': "Parfinesse"
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
		'en-us': "Spritzee",
		'fr-fr': "Fluvetin",
		'es-es': "Spritzee",
		'it-it': "Spritzee",
		'pt-br': "Spritzee",
		'de-de': "Parfi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Heavy Perfume",
				'fr-fr': "Parfum Enivrant",
				'es-es': "Fuerte Perfume",
				'it-it': "Profumo Pesante",
				'pt-br': "Perfume Intenso",
				'de-de': "Strenges Parfüm"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused. Put 6 damage counters instead of 3 on that Pokémon for this Special Condition.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Placez 6 marqueurs de dégâts au lieu de 3 sur le Pokémon ciblé pour cet État Spécial.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Pon 6 contadores de daño en vez de 3 en ese Pokémon por esta Condición Especial.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Metti sei segnalini danno invece di tre su quel Pokémon per questa condizione speciale.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Coloque 6 contadores de danos em vez de 3 naquele Pokémon para esta Condição Especial.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Lege für diesen Speziellen Zustand 6 Schadensmarken anstelle von 3 Schadensmarken auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Hug",
				'fr-fr': "Câlin",
				'es-es': "Abrazo",
				'it-it': "Abbraccio",
				'pt-br': "Abraço",
				'de-de': "Hug"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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

	description: {
		'en-us': "Its scent is so overpowering that, unless a Trainer happens to really enjoy the smell, he or she will have a hard time walking alongside it.",
	},

	thirdParty: {
		cardmarket: 286352,
		tcgplayer: 107225
	}
}

export default card
