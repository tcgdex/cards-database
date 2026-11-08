import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		'fr-fr': "Fulgudog V",
		'de-de': "Bellektro V",
		'es-es': "Boltund V",
		'pt-br': "Boltund V",
		'it-it': "Boltund V",
		'en-us': "Boltund V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Tour Fracassant",
			'de-de': "Abdrehender Schmetterer",
			'es-es': "Golpe Giro",
			'pt-br': "Virada Esmagadora",
			'it-it': "Girata Distruttiva",
			'en-us': "Smash Turn"
		},

		effect: {
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Électrojectile",
			'de-de': "Elektrokugel",
			'es-es': "Electrobala",
			'pt-br': "Bala Elétrica",
			'it-it': "Elettrodardo",
			'en-us': "Electrobullet"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 540646
	}
}

export default card
