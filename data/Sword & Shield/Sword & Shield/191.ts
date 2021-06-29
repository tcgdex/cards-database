import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Wobbuffet V",
		fr: "Qulbutoké V",
		es: "Wobbuffet V",
		it: "Wobbuffet V",
		pt: "Wobbuffet V",
		de: "Woingenau V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Psychic",
	],

	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gritty Comeback",
				fr: "Retour Abrasif",
				es: "Reaparición Resuelta",
				it: "Ripresa Decisa",
				pt: "Vingança Resoluta",
				de: "Mutiges Comeback"
			},
			effect: {
				en: "Switch all damage counters on this Pokémon with those on your opponent’s Active Pokémon.",
				fr: "Échangez tous les marqueurs de dégâts de ce Pokémon contre ceux du Pokémon Actif de votre adversaire.",
				es: "Cambia todos los contadores de daño de este Pokémon por los del Pokémon Activo de tu rival.",
				it: "Scambia tutti i segnalini danno presenti su questo Pokémon con quelli sul Pokémon attivo del tuo avversario.",
				pt: "Troque todos os contadores de dano neste Pokémon por aqueles no Pokémon Ativo do seu oponente.",
				de: "Tausche alle Schadensmarken auf diesem Pokémon gegen jene auf dem Aktiven Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Shadow Bind",
				fr: "Étreinte d’Ombre",
				es: "Atadura Sombría",
				it: "Legami d’Ombra",
				pt: "Aprisionamento Sombrio",
				de: "Schattenbindung"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
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
	regulationMark: "D"
}

export default card
