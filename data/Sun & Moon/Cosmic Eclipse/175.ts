import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Herdier",
		fr: "Ponchien",
		es: "Herdier",
		it: "Herdier",
		pt: "Herdier",
		de: "Terribark"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		507,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Work Up",
				fr: "Rengorgement",
				es: "Avivar",
				it: "Cuordileone",
				pt: "Elaborado",
				de: "Kraftschub"
			},
			effect: {
				en: "During your next turn, this Pokémon’s attacks do 60 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, los ataques de este Pokémon hacen 60 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 60 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, os ataques deste Pokémon causarão 60 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
				es: "Bote Cabezazo",
				it: "Rimbalzo Bottintesta",
				pt: "Cabeçada Ricochete",
				de: "Abrupter Kopfstoß"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
