import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		'en-us': "Boltund V",
		'fr-fr': "Fulgudog V",
		'es-es': "Boltund V",
		'it-it': "Boltund V",
		'pt-br': "Boltund V",
		'de-de': "Bellektro V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Eske Yoshinob",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Smash Turn",
			'fr-fr': "Tour Fracassant",
			'de-de': "Abdrehender Schmetterer",
			'es-es': "Golpe Giro",
			'pt-br': "Virada Esmagadora",
			'it-it': "Girata Distruttiva"
		},

		damage: 30,

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electrobullet",
			'fr-fr': "Électrojectile",
			'de-de': "Elektrokugel",
			'es-es': "Electrobala",
			'pt-br': "Bala Elétrica",
			'it-it': "Elettrodardo"
		},

		damage: 120,

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582985,
				tcgplayer: 253144
			}
		},
	],
}

export default card
