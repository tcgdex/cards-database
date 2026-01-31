import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Genesect",
		fr: "Genesect",
		es: "Genesect",
		'es-mx': "Genesect",
		de: "Genesect",
		it: "Genesect",
		pt: "Genesect"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	dexId: [649],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug's Cannon",
			fr: "Canon d'Insecte",
			es: "Cañón de Bichos",
			'es-mx': "Insecticañón",
			de: "Käferkanone",
			it: "Coleocannone",
			pt: "Canhão do Inseto"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon for each {G} Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie {G} attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 20 puntos de daño a uno de los Pokémon de tu rival por cada Energía {G} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía {G} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte {G}-Energie 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia {G} assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia {G} ligada a este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
			es: "Ataque Fugaz",
			'es-mx': "Ataque Veloz",
			de: "Tempoangriff",
			it: "Attacco Veloce",
			pt: "Ataque em Velocidade"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	],

	thirdParty: {
		cardmarket: 857583,
		tcgplayer: 662161
	}
}

export default card