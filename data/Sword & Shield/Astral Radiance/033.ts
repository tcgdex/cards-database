import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Mamoswine",
		fr: "Mammochon",
		es: "Mamoswine",
		it: "Mamoswine",
		pt: "Mamoswine",
		de: "Mamutel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
		es: "Piloswine",
		it: "Piloswine",
		pt: "Piloswine",
		de: "Keifel"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Blizzard",
			fr: "Blizzard",
			es: "Ventisca",
			it: "Bora",
			pt: "Nevasca",
			de: "Blizzard"
		},

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 80
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Iceberg Press",
			fr: "Pression Iceberg",
			es: "Presión Iceberg",
			it: "Pressa Iceberg",
			pt: "Iceberg Compressor",
			de: "Eisbergdruck"
		},

		effect: {
			en: "Discard an Energy from this Pokémon. During your opponent's next turn, the Defending Pokémon can't attack.",
			fr: "Défaussez une Énergie de ce Pokémon. Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			es: "Descarta 1 Energía de este Pokémon. Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			it: "Scarta un'Energia da questo Pokémon. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			pt: "Descarte 1 Energia deste Pokémon. Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 170
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card