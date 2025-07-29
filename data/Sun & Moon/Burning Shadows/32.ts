import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

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
				en: "Splashing Dodge",
				fr: "Esquive Éclaboussante",
				es: "Esquivo Chapoteo",
				it: "Schivata Splash",
				pt: "Evasão de Borrifada",
				de: "Ausweichplatscher"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299437
	}
}

export default card
