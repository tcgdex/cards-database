import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
				es: "Rayo Psi",
				it: "Psico",
				pt: "Raio Psíquico",
				de: "Mentale Blockade"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Miraculous Spin",
				fr: "Tournoiement Miraculeux",
				es: "Giro Milagroso",
				it: "Trottola Miracolosa",
				pt: "Giro Milagroso",
				de: "Wunderkreisel"
			},
			effect: {
				en: "This attack does 40 damage for each Steven’s Resolve card in your discard pile.",
				fr: "Cette attaque inflige 40 dégâts pour chaque carte Résolution de Pierre dans votre pile de défausse.",
				es: "Este ataque hace 40 puntos de daño por cada carta de Decisión de Máximo en tu pila de descartes.",
				it: "Questo attacco infligge 40 danni per ogni carta Grinta di Rocco nella tua pila degli scarti.",
				pt: "Este ataque causa 40 pontos de dano para cada carta Resolução do Steven na sua pilha de descarte.",
				de: "Diese Attacke fügt 40 Schadenspunkte mal der Anzahl der Troys Entschluss-Karten in deinem Ablagestapel zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 361324
	}
}

export default card
