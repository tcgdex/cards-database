import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		en: "Boltund V",
		fr: "Fulgudog V",
		es: "Boltund V",
		it: "Boltund V",
		pt: "Boltund V",
		de: "Bellektro V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shin Nagasawa",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Smash Turn",
			fr: "Tour Fracassant",
			de: "Abdrehender Schmetterer",
			es: "Golpe Giro",
			pt: "Virada Esmagadora",
			it: "Girata Distruttiva"
		},

		damage: 30,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electrobullet",
			fr: "Électrojectile",
			de: "Elektrokugel",
			es: "Electrobala",
			pt: "Bala Elétrica",
			it: "Elettrodardo"
		},

		damage: 120,

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
