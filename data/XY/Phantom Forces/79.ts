import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
		es: "Fearow",
		it: "Fearow",
		pt: "Fearow",
		de: "Ibitak"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		22,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
		es: "Spearow",
		it: "Spearow",
		pt: "Spearow",
		de: "Habitak"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fly",
				fr: "Vol",
				es: "Vuelo",
				it: "Volo",
				pt: "Voar",
				de: "Fliegen"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Jogue uma moeda. Se sair coroa, esse ataque não fará nada. Se sair cara, impedirá todos os efeitos dos ataques a este Pokémon, inclusive danos, durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec Vrille",
				es: "Pico Taladro",
				it: "Perforbecco",
				pt: "Bico Broca",
				de: "Bohrschnabel"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
