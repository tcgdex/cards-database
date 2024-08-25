import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Kyurem",
		fr: "Kyurem",
		es: "Kyurem",
		it: "Kyurem",
		pt: "Kyurem",
		de: "Kyurem"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Plasma Bane",
			fr: "Fléau Plasma",
			es: "Azote Plasma",
			it: "Anti-Plasma",
			pt: "Maldição de Plasma",
			de: "Plasma-Verderben"
		},

		effect: {
			en: "If your opponent has any cards in their discard pile that have \"Colress\" in the name, this Pokémon can use the Trifrost attack for Colorless.",
			fr: "Si votre adversaire a dans sa pile de défausse au moins une carte ayant \" Nikolaï \" dans son nom, ce Pokémon peut utiliser l'attaque Triple Givre pour Colorless.",
			es: "Si tu rival tiene alguna carta en su pila de descartes que tenga \"Acromo\" en el nombre, este Pokémon puede usar el ataque Triple Escarcha por Colorless.",
			it: "Se il tuo avversario ha delle carte nella sua pila degli scarti che hanno \"Acromio\" o \"Acrocongegno\" nel nome, questo Pokémon può usare l'attacco Triplogelo al costo di Colorless.",
			pt: "Se o seu oponente tiver alguma carta na pilha de descarte dele que tem \"Colress\" em seu nome, este Pokémon poderá usar o ataque Geada Tripla por Colorless.",
			de: "Wenn dein Gegner mindestens 1 Karte in seinem Ablagestapel hat, bei der \"Achromas\" zum Namen gehört, kann dieses Pokémon die Attacke Dreifachfrost für Colorless einsetzen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Metal", "Metal", "Colorless"],

		name: {
			en: "Trifrost",
			fr: "Triple Givre",
			es: "Triple Escarcha",
			it: "Triplogelo",
			pt: "Geada Tripla",
			de: "Dreifachfrost"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. This attack does 110 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 110 dégâts à 3 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta todas las Energías de este Pokémon. Este ataque hace 110 puntos de daño a 3 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 110 danni a tre dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte todas as Energias deste Pokémon. Este ataque causa 110 pontos de dano a 3 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 3 Pokémon deines Gegners 110 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
