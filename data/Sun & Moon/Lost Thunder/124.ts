import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
		es: "Forretress",
		it: "Forretress",
		pt: "Forretress",
		de: "Forstellka"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Thorny Eruption",
				fr: "Éruption Épineuse",
				es: "Erupción Espinosa",
				it: "Eruzione Spinosa",
				pt: "Erupção Espinhosa",
				de: "Dornige Eruption"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage for each heads to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara a cada Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Wirf 3 Münzen. Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte pro Kopf zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Lost Blast",
				fr: "Explosion Perdue",
				es: "Explosión Perdida",
				it: "Esplosione Perduta",
				pt: "Explosão Perdida",
				de: "Schuss ins Nirgendwo"
			},
			effect: {
				en: "Put this Pokémon and all cards attached to it in the Lost Zone.",
				fr: "Placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue.",
				es: "Pon este Pokémon y todas las cartas unidas a él en la Zona Perdida.",
				it: "Prendi questo Pokémon e tutte le carte a esso assegnate e mettili nell’area perduta.",
				pt: "Coloque este Pokémon e todas as cartas ligadas a ele na Zona Perdida.",
				de: "Lege dieses Pokémon und alle an es angelegten Karten ins Nirgendwo."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365761
	}
}

export default card
