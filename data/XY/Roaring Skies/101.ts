import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Latios EX",
		fr: "Latios EX",
		es: "Latios EX",
		it: "Latios EX",
		pt: "Latios EX",
		de: "Latios EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 170,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fast Raid",
				fr: "Raid Éclair",
				es: "Raid Rápido",
				it: "Raid Veloce",
				pt: "Incursão Rápida",
				de: "Rasanter Raubzug"
			},
			effect: {
				en: "If you go first, you can use this attack on your first turn.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
				es: "Si sales primero, puedes usar este ataque durante tu primer turno.",
				it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno.",
				pt: "Se você for o primeiro, poderá usar este ataque na sua primeira vez de jogar.",
				de: "Wenn du als Erster am Zug bist, kannst du diesen Angriff während deines ersten Zuges einsetzen."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Light Pulse",
				fr: "Vibrumineuse",
				es: "Pulso Luminoso",
				it: "Impulso Minore",
				pt: "Pulso de Luz",
				de: "Sanfte Welle"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados a este Pokémon durante a próxima vez do seu oponente.",
				de: "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, die diesem Pokémon während des nächsten Zuges deines Gegners zugefügt würden."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 282726
	}
}

export default card
