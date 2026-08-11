import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tapu Fini",
		'fr-fr': "Tokopisco",
		'es-es': "Tapu Fini",
		'it-it': "Tapu Fini",
		'pt-br': "Tapu Fini",
		'de-de': "Kapu-Kime"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		788,
	],

	hp: 120,

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
				'en-us': "Razor Fin",
				'fr-fr': "Aileron-Rasoir",
				'es-es': "Aleta Afilada",
				'it-it': "Pinnalama",
				'pt-br': "Barbatana Cortante",
				'de-de': "Rasierflosse"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Nature Wave",
				'fr-fr': "Onde Naturelle",
				'es-es': "Ola de la Naturaleza",
				'it-it': "Onda della Natura",
				'pt-br': "Onda da Natureza",
				'de-de': "Welle der Natur"
			},
			effect: {
				'en-us': "If your opponent has any Ultra Beasts in play, this attack can be used for Colorless.",
				'fr-fr': "Si votre adversaire a une Ultra-Chimère en jeu, cette attaque peut être utilisée pour Colorless.",
				'es-es': "Si tu rival tiene algún Ultraente en juego, este ataque se puede usar por 1 Energía Colorless.",
				'it-it': "Se il tuo avversario ha delle Ultracreature in gioco, il costo di questo attacco è Colorless.",
				'pt-br': "Se o seu oponente tiver alguma Ultracriatura em jogo, este ataque poderá ser usado com Colorless.",
				'de-de': "Wenn dein Gegner mindestens 1 Ultrabestie im Spiel hat, kann diese Attacke für Colorless eingesetzt werden."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This guardian deity of Poni Island manipulates water. Because it lives deep within a thick fog, it came to be both feared and revered.",
	},
}

export default card
