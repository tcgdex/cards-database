import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Wobbuffet V",
		'fr-fr': "Qulbutoké V",
		'es-es': "Wobbuffet V",
		'it-it': "Wobbuffet V",
		'pt-br': "Wobbuffet V",
		'de-de': "Woingenau V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gritty Comeback",
				'fr-fr': "Retour Abrasif",
				'es-es': "Reaparición Resuelta",
				'it-it': "Ripresa Decisa",
				'pt-br': "Vingança Resoluta",
				'de-de': "Mutiges Comeback"
			},
			effect: {
				'en-us': "Switch all damage counters on this Pokémon with those on your opponent's Active Pokémon.",
				'fr-fr': "Échangez tous les marqueurs de dégâts de ce Pokémon contre ceux du Pokémon Actif de votre adversaire.",
				'es-es': "Cambia todos los contadores de daño de este Pokémon por los del Pokémon Activo de tu rival.",
				'it-it': "Scambia tutti i segnalini danno presenti su questo Pokémon con quelli sul Pokémon attivo del tuo avversario.",
				'pt-br': "Troque todos os contadores de dano neste Pokémon por aqueles no Pokémon Ativo do seu oponente.",
				'de-de': "Tausche alle Schadensmarken auf diesem Pokémon gegen jene auf dem Aktiven Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Shadow Bind",
				'fr-fr': "Étreinte d'Ombre",
				'es-es': "Atadura Sombría",
				'it-it': "Legami d'Ombra",
				'pt-br': "Aprisionamento Sombrio",
				'de-de': "Schattenbindung"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",
	dexId: [202],

	thirdParty: {
		cardmarket: 437049,
		tcgplayer: 208395
	}
}

export default card
