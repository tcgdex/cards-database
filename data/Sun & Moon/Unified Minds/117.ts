import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tag Coach",
				fr: "Coaching d’Escouade",
				es: "Instrucción Relevo",
				it: "Istruttore Alleati",
				pt: "Técnico de Aliados",
				de: "Team-Trainer"
			},
			effect: {
				en: "Your TAG TEAM Pokémon take 20 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				fr: "Vos Pokémon ESCOUADE subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tu rival hacen 20 puntos de daño menos a tus Pokémon de equipo de RELEVOS (después de aplicar Debilidad y Resistencia).",
				it: "I tuoi Pokémon ALLEATI subiscono 20 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				pt: "Seus Pokémon ALIADOS recebem 20 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência).",
				de: "Deinen TAG TEAM Pokémon werden durch Attacken deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Cross",
				fr: "Passage Éclair",
				es: "Puñetazo Mach",
				it: "Incromach",
				pt: "Cruzado Veloz",
				de: "Tempo-Cross"
			},

			damage: 90,

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
		cardmarket: 388387
	}
}

export default card
