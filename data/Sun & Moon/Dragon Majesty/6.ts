import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
		es: "Blaziken",
		it: "Blaziken",
		pt: "Blaziken",
		de: "Lohgock"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Firestarter",
				fr: "Pyroteknik",
				es: "Encendedor",
				it: "Accendifuoco",
				pt: "Incendiário",
				de: "Brandstiftung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Fire de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Fire-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Stream",
				fr: "Courant de Feu",
				es: "Corriente de Fuego",
				it: "Correnti di Fuoco",
				pt: "Corrente de Fogo",
				de: "Feuerstrom"
			},
			effect: {
				en: "Discard a Fire Energy from this Pokémon. This attack does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez une Énergie Fire de ce Pokémon. Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta 1 Energía Fire de este Pokémon. Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta un’Energia Fire assegnata a questo Pokémon. Questo attacco infligge 20 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte 1 Energia Fire deste Pokémon. Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Lege 1 Fire-Energie von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
