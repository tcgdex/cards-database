import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly",
		de: "Wommel"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		742,
	],
	hp: 30,
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
				en: "Fly Around",
				fr: "Papillonnement",
				es: "Revolotear",
				it: "Svolazzo",
				pt: "Voar por aí",
				de: "Herumfliegen"
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks during your opponent’s next turn, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c’est face, évitez ces dégâts.",
				es: "Si se inflige cualquier daño a este Pokémon por ataques durante el próximo turno de tu rival, lanza 1 moneda. Si sale cara, evita ese daño.",
				it: "Se questo Pokémon subisce danni da attacchi durante il prossimo turno del tuo avversario, lancia una moneta. Se esce testa, previeni quei danni.",
				pt: "Se qualquer dano for causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente, jogue 1 moeda. Se sair cara, previna esse dano.",
				de: "Wirf 1 Münze, wenn diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken Schaden zugefügt wird. Verhindere diesen Schaden bei Kopf."
			},
			damage: 10,

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



}

export default card
