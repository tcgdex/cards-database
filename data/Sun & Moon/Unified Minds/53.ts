import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
		es: "Tapu Fini",
		it: "Tapu Fini",
		pt: "Tapu Fini",
		de: "Kapu-Kime"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

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
				en: "Razor Fin",
				fr: "Aileron-Rasoir",
				es: "Aleta Afilada",
				it: "Pinnalama",
				pt: "Barbatana Cortante",
				de: "Rasierflosse"
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
				en: "Nature Wave",
				fr: "Onde Naturelle",
				es: "Ola de la Naturaleza",
				it: "Onda della Natura",
				pt: "Onda da Natureza",
				de: "Welle der Natur"
			},
			effect: {
				en: "If your opponent has any Ultra Beasts in play, this attack can be used for Colorless.",
				fr: "Si votre adversaire a une Ultra-Chimère en jeu, cette attaque peut être utilisée pour Colorless.",
				es: "Si tu rival tiene algún Ultraente en juego, este ataque se puede usar por 1 Energía Colorless.",
				it: "Se il tuo avversario ha delle Ultracreature in gioco, il costo di questo attacco è Colorless.",
				pt: "Se o seu oponente tiver alguma Ultracriatura em jogo, este ataque poderá ser usado com Colorless.",
				de: "Wenn dein Gegner mindestens 1 Ultrabestie im Spiel hat, kann diese Attacke für Colorless eingesetzt werden."
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



}

export default card
