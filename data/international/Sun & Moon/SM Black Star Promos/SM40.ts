import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Jangmo-o",
		'fr-fr': "Bébécaille",
		'es-es': "Jangmo-o",
		'it-it': "Jangmo-o",
		'pt-br': "Jangmo-o",
		'de-de': "Miniras"
	},
	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		782,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Iron Defense",
				'fr-fr': "Mur de Fer",
				'es-es': "Defensa Férrea",
				'it-it': "Ferroscudo",
				'pt-br': "Defesa de Ferro",
				'de-de': "Eisenabwehr"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti i danni da attacchi inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, prevenirá todo o dano causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei Kopf allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken zugefügt wird."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "It expresses its feelings by smacking its scales. Metallic sounds echo through the tall mountains where Jangmo-o lives.",
	},
}

export default card
