import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
		es: "Kricketune",
		it: "Kricketune",
		pt: "Kricketune",
		de: "Zirpeise"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		402,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
		es: "Kricketot",
		it: "Kricketot",
		pt: "Kricketot",
		de: "Zirpurze"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
				es: "Chirrido",
				it: "Stridio",
				pt: "Agudo",
				de: "Kreideschrei"
			},
			effect: {
				en: "During your next turn, any damage done to the Defending Pokémon by attacks is increased by 60 (after applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, tous les dégâts infligés au Pokémon Défenseur par des attaques sont augmentés de 60 (après application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, cualquier daño infligido al Pokémon Defensor por ataques aumenta en 60 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, i danni inflitti al Pokémon difensore dagli attacchi sono aumentati di 60, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, qualquer dano causado por ataques ao Pokémon Defensor será aumentado em 60 (após a aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges wird Schaden, der dem Verteidigenden Pokémon durch Angriffe zugefügt wird, um 60 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
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

	thirdParty: {
		cardmarket: 288181,
		tcgplayer: 111509
	}
}

export default card
