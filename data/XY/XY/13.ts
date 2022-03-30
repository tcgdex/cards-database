import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Quilladin",
		fr: "Boguérisse",
		es: "Quilladin",
		it: "Quilladin",
		pt: "Quilladin",
		de: "Igastarnish"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		651,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Chespin",
		fr: "Marisson",
		es: "Chespin",
		it: "Chespin",
		pt: "Chespin",
		de: "Igamaro"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrunch",
				fr: "Compresse",
				es: "Acurruque",
				it: "Schiacciamento",
				pt: "Esmigalhar",
				de: "Zähneknirschen"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, previeni tutti i danni da attacchi inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, impedirá todos os danos causados a este Pokémon por ataques durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe zugefügt würde."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Wood Hammer",
				fr: "Martobois",
				es: "Mazazo",
				it: "Mazzuolegno",
				pt: "Martelo de Madeira",
				de: "Holzhammer"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Este Pokémon causa 10 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
