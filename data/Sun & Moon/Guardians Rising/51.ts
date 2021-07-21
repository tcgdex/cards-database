import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		569,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Trashalanche",
				fr: "Avalanche de Déchets",
				es: "Basuravalancha",
				it: "Valanga Rifiuti",
				pt: "Avalanche de Lixo",
				de: "Mülllawine"
			},
			effect: {
				en: "This attack does 20 damage for each Item card in your opponent’s discard pile.",
				fr: "Cette attaque inflige 20 dégâts pour chaque carte Objet dans la pile de défausse de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño por cada carta de Objeto en la pila de descartes de tu rival.",
				it: "Questo attacco infligge 20 danni per ogni carta Strumento nella pila degli scarti del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano para cada carta de Item na pilha de descarte do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Itemkarten im Ablagestapel deines Gegners zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acid Spray",
				fr: "Bombe Acide",
				es: "Bomba Ácida",
				it: "Acidobomba",
				pt: "Spray Ácido",
				de: "Säurespeier"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sala cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
