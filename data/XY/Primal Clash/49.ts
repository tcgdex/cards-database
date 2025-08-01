import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Clamperl",
		fr: "Coquiperl",
		es: "Clamperl",
		it: "Clamperl",
		pt: "Clamperl",
		de: "Perlu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		366,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Shell Protection",
				fr: "Coqui-Défense",
				es: "Protección Caparazón",
				it: "Proteggiguscio",
				pt: "Proteção da Concha",
				de: "Muschelschutz"
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 50 or less.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 50 ou moins.",
				es: "Durante el próximo turno de tu rival, si este Pokémon fuera a resultar dañado por un ataque, evita el daño infligido por ese ataque a este Pokémon si el daño es de 50 puntos o menos.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon sta per essere danneggiato da un attacco, previeni il danno di quell'attacco inflitto a questo Pokémon se quel danno è 50 o meno.",
				pt: "Durante a próxima vez de jogar do seu oponente, se esse Pokémon estiver prestes a sofrer danos causados por um ataque, impeça os danos causados pelo ataque a esse Pokémon se eles forem 50 ou menos.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch einen Angriff 50 oder weniger Schadenspunkte zugefügt werden, verhindere diesen Schaden."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 273580
	}
}

export default card
