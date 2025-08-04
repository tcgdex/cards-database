import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Diancie",
		fr: "Diancie",
		es: "Diancie",
		it: "Diancie",
		pt: "Diancie",
		de: "Diancie"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		719,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sparkle",
				fr: "Éclat",
				es: "Brillo",
				it: "Scintillio",
				pt: "Centelha",
				de: "Glitzern"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
				es: "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 1 moneda. Si sale cruz, ese ataque no hace nada.",
				it: "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha effetto.",
				pt: "Se o Pokémon Defensor tentar atacar durante a próxima vez de jogar do seu oponente, seu oponente jogará uma moeda. Se sair coroa, o ataque não fará nada.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Diamond Storm",
				fr: "Orage Adamantin",
				es: "Tormenta de Diamantes",
				it: "Diamantempesta",
				pt: "Tempestade Diamante",
				de: "Diamantsturm"
			},
			effect: {
				en: "Heal 30 damage from each of your Fairy Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon Fairy.",
				it: "Cura ciascuno dei tuoi Pokémon Fairy da 30 danni.",
				pt: "Cura 30 de danos de cada um dos seus Pokémon Fairy.",
				de: "Heile 30 Schadenspunkte bei jedem deiner Fairy-Pokémon."
			},
			damage: 60,

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

	thirdParty: {
		cardmarket: 281877,
		tcgplayer: 94639
	}
}

export default card
