import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		it: "Dusknoir",
		pt: "Dusknoir",
		de: "Zwirrfinst"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		477,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sinister Hand",
				fr: "Main Sinistre",
				es: "Mano Siniestra",
				it: "Manosinistra",
				pt: "Mão Sinistra",
				de: "Unheimliches Händchen"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your opponent’s Pokémon to another of your opponent’s Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts de l’un des Pokémon de votre adversaire vers un autre des Pokémon de votre adversaire.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 contador de daño de 1 de los Pokémon de tu rival a otro de los Pokémon de tu rival.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare i segnalini danno tra i Pokémon del tuo avversario, uno alla volta.",
				pt: "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover 1 marcador de danos de 1 dos Pokémon do seu oponente para outro dos Pokémon do seu oponente.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von 1 Pokémon deines Gegners auf ein anderes Pokémon deines Gegners verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Punch",
				fr: "Poing Ombre",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280650,
		tcgplayer: 85040
	}
}

export default card
