import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [990],
	set: Set,

	name: {
		'en-us': "Iron Treads ex",
		'fr-fr': "Roue-de-Fer-ex",
		'es-es': "Ferrodada ex",
		'it-it': "Solcoferreo-ex",
		'pt-br': "Trilho Férreo ex",
		'de-de': "Eisenrad-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Triple Laser",
			'fr-fr': "Triple Laser",
			'es-es': "Láser Triple",
			'it-it': "Triplolaser",
			'pt-br': "Laser Triplo",
			'de-de': "Dreifachlaser"
		},

		effect: {
			'en-us': "This attack does 30 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à 3 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a 3 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a tre dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 3 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 3 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Cybernetic Wheels",
			'fr-fr': "Roues Cybernétiques",
			'es-es': "Ruedas Cibernéticas",
			'it-it': "Ruote Cibernetiche",
			'pt-br': "Rodas Cibernéticas",
			'de-de': "Kybernetische Räder"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "KEIICHIRO ITO",

	thirdParty: {
        cardmarket: 702544,
        tcgplayer: 490291
    }
}

export default card