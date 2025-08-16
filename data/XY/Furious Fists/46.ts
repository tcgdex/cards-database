import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fighting Fury",
				fr: "Furie Combative",
				es: "Furia Luchadora",
				it: "Furialotta",
				pt: "Luta Furiosa",
				de: "Kampfgeist"
			},
			effect: {
				en: "Each of your Fighting Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon Fighting infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Pokémon Fighting hacen 20 puntos de daño más a los Pokémon Activos de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Ciascuno degli attacchi dei tuoi Pokémon Fighting infligge 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques de cada um dos seus Pokémon Fighting causam 20 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Jeder Angriff deiner Fighting-Pokémon fügt dem Aktiven Pokémon deines Gegners 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Machamp Crush",
				fr: "Mackogneur Broyeur",
				es: "Presión Machamp",
				it: "Schiacciata Machamp",
				pt: "Destruição Machamp",
				de: "Machomei-Mühle"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 40 (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 40, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado por ataques ao Pokémon Defensor será reduzido em 40 (antes da aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 40 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281710,
		tcgplayer: 92223
	}
}

export default card
