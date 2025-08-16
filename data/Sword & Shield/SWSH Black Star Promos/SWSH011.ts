import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Moumouton",
		en: "Wooloo",
		es: "Wooloo",
		it: "Wooloo",
		pt: "Wooloo",
		de: "Wolly"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Boul'Armure",
				en: "Defense Curl",
				es: "Rizo Defensa",
				it: "Ricciolscudo",
				pt: "Espiral de Defesa",
				de: "Einigler"
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				es: "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco durante il prossimo turno del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, previna todo o dano causado a este Pokémon por ataques durante o próximo turno do seu oponente.",
				de: "Wirf 1 Münze. Verhindere bei Kopf allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken zugefügt wird."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coup d'Boule",
				en: "Headbutt",
				es: "Golpe Cabeza",
				it: "Bottintesta",
				pt: "Cabeçada",
				de: "Kopfnuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed."
	},

	dexId: [831],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 439963
	}
}

export default card
