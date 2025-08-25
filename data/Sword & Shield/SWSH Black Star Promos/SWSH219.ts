import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		fr: "Fulgudog V",
		de: "Bellektro V",
		es: "Boltund V",
		pt: "Boltund V",
		it: "Boltund V",
		en: "Boltund V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Tour Fracassant",
			de: "Abdrehender Schmetterer",
			es: "Golpe Giro",
			pt: "Virada Esmagadora",
			it: "Girata Distruttiva",
			en: "Smash Turn"
		},

		effect: {
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Électrojectile",
			de: "Elektrokugel",
			es: "Electrobala",
			pt: "Bala Elétrica",
			it: "Elettrodardo",
			en: "Electrobullet"
		},

		effect: {
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 540646
	}
}

export default card