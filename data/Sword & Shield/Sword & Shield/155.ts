import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Cramorant V",
		fr: "Nigosier V",
		es: "Cramorant V",
		it: "Cramorant V",
		pt: "Cramorant V",
		de: "Urgl V"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 200,

	types: [
		"Colorless",
	],

	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beak Catch",
				fr: "Bec Gobeur",
				es: "Captura Pico",
				it: "Catturbecco",
				pt: "Captura de Bico",
				de: "Schnabelfang"
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spit Shot",
				fr: "Tir Rejet",
				es: "Lanzamiento Escupitajo",
				it: "Colposputo",
				pt: "Cusparada",
				de: "Spuckschuss"
			},
			effect: {
				en: "Discard all Energy from this Pokémon. This attack does 160 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toute l’Énergie de ce Pokémon. Cette attaque inflige 160 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta todas las Energías de este Pokémon. Este ataque hace 160 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 160 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte todas as Energias deste Pokémon. Este ataque causa 160 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 160 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
