import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [110],
	set: Set,

	name: {
		'fr-fr': "Smogogo",
		'en-us': "Weezing",
		'es-es': "Weezing",
		'it-it': "Weezing",
		'pt-br': "Weezing",
		'de-de': "Smogmog"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Smogo",
		'en-us': "Koffing",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "On s'Éclate",
			'en-us': "Let's Have a Blast",
			'es-es': "A Pasarlo Bomba",
			'it-it': "Finale col Botto",
			'pt-br': "Vamos Botar pra Quebrar",
			'de-de': "Krachen lassen"
		},

		effect: {
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, lanza 1 moneda. Si sale cara, el Pokémon Atacante queda Fuera de Combate.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, lancia una moneta. Se esce testa, il Pokémon attaccante viene messo KO.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, jogue uma moeda. Se sair cara, o Pokémon Atacante será Nocauteado.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, wirf 1 Münze. Bei Kopf ist das Angreifende Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Émanations Tournantes",
			'en-us': "Spinning Fumes",
			'es-es': "Gases Giratorios",
			'it-it': "Esalazioni Vorticose",
			'pt-br': "Fumaça Giratória",
			'de-de': "Qualmwirbel"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733705,
				tcgplayer: 516680,
				cardtrader: 261243
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733705,
				tcgplayer: 516680,
				cardtrader: 261243
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card
