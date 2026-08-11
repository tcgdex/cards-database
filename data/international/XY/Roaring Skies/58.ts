import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Latios EX",
		'fr-fr': "Latios EX",
		'es-es': "Latios EX",
		'it-it': "Latios EX",
		'pt-br': "Latios EX",
		'de-de': "Latios EX"
	},

	illustrator: "Ayaka Yoshida",
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
				'en-us': "Fast Raid",
				'fr-fr': "Raid Éclair",
				'es-es': "Raid Rápido",
				'it-it': "Raid Veloce",
				'pt-br': "Incursão Rápida",
				'de-de': "Rasanter Raubzug"
			},
			effect: {
				'en-us': "If you go first, you can use this attack on your first turn.",
				'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
				'es-es': "Si sales primero, puedes usar este ataque durante tu primer turno.",
				'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno.",
				'pt-br': "Se você for o primeiro, poderá usar este ataque na sua primeira vez de jogar.",
				'de-de': "Wenn du als Erster am Zug bist, kannst du diesen Angriff während deines ersten Zuges einsetzen."
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
				'en-us': "Light Pulse",
				'fr-fr': "Vibrumineuse",
				'es-es': "Pulso Luminoso",
				'it-it': "Impulso Minore",
				'pt-br': "Pulso de Luz",
				'de-de': "Sanfte Welle"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados a este Pokémon durante a próxima vez do seu oponente.",
				'de-de': "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, die diesem Pokémon während des nächsten Zuges deines Gegners zugefügt würden."
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
		cardmarket: 282726,
		tcgplayer: 98094
	}
}

export default card
