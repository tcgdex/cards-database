import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stonjourner",
		'fr-fr': "Dolman",
		'de-de': "Humanolith",
		'it-it': "Stonjourner",
		'es-es': "Stonjourner",
		'pt-br': "Stonjourner",
		'es-mx': "Stonjourner"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [874],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Stony Kick",
			'fr-fr': "Coup de Pied Rocailleux",
			'de-de': "Steinerner Tritt",
			'it-it': "Calcio Pietroso",
			'es-es': "Patada Rocosa",
			'pt-br': "Pontapé Pétreo",
			'es-mx': "Patada Rocosa"
		},

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Boundless Power",
			'fr-fr': "Puissance Illimitée",
			'de-de': "Unbegrenzte Kraft",
			'it-it': "Potere Incontenibile",
			'es-es': "Poder Ilimitado",
			'pt-br': "Poder Ilimitado",
			'es-mx': "Poder Ilimitado"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851152,
				tcgplayer: 654420
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851152,
				tcgplayer: 654420
			}
		},
	],
}

export default card
