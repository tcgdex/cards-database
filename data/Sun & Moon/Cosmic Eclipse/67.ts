import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nuzzle",
				fr: "Frotte-Frimousse",
				es: "Moflete Estático",
				it: "Elettrococcola",
				pt: "Chamego",
				de: "Wangenrubbler"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Powerful Spark",
				fr: "Étincelle Puissante",
				es: "Chispa Poderosa",
				it: "Superscintilla",
				pt: "Fagulha Poderosa",
				de: "Mächtiger Funke"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Lightning Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies Lightning attachées à tous vos Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada Energía Lightning unida a todos tus Pokémon.",
				it: "Questo attacco infligge 20 danni per ogni Energia Lightning assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 20 pontos de dano vezes a quantidade de Energia Lightning ligada a todos os seus Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an alle deine Pokémon angelegten Lightning-Energien zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 407984
	}
}

export default card
