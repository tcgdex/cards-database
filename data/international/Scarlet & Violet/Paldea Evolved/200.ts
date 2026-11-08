import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [668],
	set: Set,

	name: {
		'fr-fr': "Némélios",
		'en-us': "Pyroar",
		'es-es': "Pyroar",
		'it-it': "Pyroar",
		'pt-br': "Pyroar",
		'de-de': "Pyroleo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Hélionceau",
		'en-us': "Litleo",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Roussi",
			'en-us': "Singe",
			'es-es': "Quemadura",
			'it-it': "Scottata",
			'pt-br': "Chamuscada",
			'de-de': "Versengung"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Dépassement",
			'en-us': "Overrun",
			'es-es': "Rebasar",
			'it-it': "Oltrepassare",
			'pt-br': "Atropelar",
			'de-de': "Überrennen"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715675,
				tcgplayer: 497603,
				cardtrader: 248852
			}
		},
	],

	illustrator: "Po-Suzuki",

	description: {
		'en-us': "The females of a pride work together to bring down prey. It's thanks to them that their pride doesn't starve.",
	},
}

export default card
