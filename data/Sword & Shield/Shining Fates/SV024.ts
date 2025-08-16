import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		fr: "Darumacho de Galar",
		en: "Galarian Darmanitan",
		es: "Darmanitan de Galar",
		it: "Darmanitan di Galar",
		pt: "Darmanitan de Galar",
		de: "Galar-Flampivian"
	},

	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		fr: "Darumarond de Galar",
		en: "Galarian Darumaka"
	},

	attacks: [{
		name: {
			fr: "Blizzard",
			en: "Blizzard",
			es: "Ventisca",
			it: "Bora",
			pt: "Nevasca",
			de: "Blizzard"
		},

		effect: {
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Coup d'Boule Écrasant",
			en: "Crushing Headbutt",
			es: "Cabezazo Devastador",
			it: "Bottintesta Dirompente",
			pt: "Cabeçada Esmagadora",
			de: "Vernichtende Kopfnuss"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup d'Boule Écrasant.",
			en: "During your next turn, this Pokémon can't use Crushing Headbutt.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Cabezazo Devastador.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Bottintesta Dirompente.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Cabeçada Esmagadora.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Vernichtende Kopfnuss nicht einsetzen."
		},

		damage: 170,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "On days when blizzards blow through, it comes down to where people live. It stashes food in the snowball on its head, taking it home for later."
	}
}

export default card
