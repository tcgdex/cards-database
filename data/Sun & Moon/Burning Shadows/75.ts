import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		745,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dangerous Claws",
				fr: "Griffes Redoutables",
				es: "Zarpas Peligrosas",
				it: "Artigli Pericolosi",
				pt: "Garras Temerárias",
				de: "Bedrohliche Klauen"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
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
			damage: 90,

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
		cardmarket: 299477
	}
}

export default card
