import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [895],
	set: Set,

	name: {
		fr: "Regidrago V",
		de: "Regidrago V",
		es: "Regidrago V",
		pt: "Regidrago V",
		it: "Regidrago V",
		en: "Regidrago V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Cri du Ciel",
			de: "Himmelsgrollen",
			es: "Rugido Celestial",
			pt: "Rugido Celestial",
			it: "Gentilboato",
			en: "Celestial Roar"
		},

		effect: {
			fr: "Défaussez les 3 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
			de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Wenn unter jenen Karten Energiekarten sind, lege sie an dieses Pokémon an.",
			es: "Descarta las 3 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía, únelas a este Pokémon.",
			pt: "Descarte as 3 cartas de cima do seu baralho. Se houver cartas de Energia entre elas, ligue-as a este Pokémon.",
			it: "Scarta le prime tre carte del tuo mazzo. Se fra queste ci sono delle carte Energia, assegnale a questo Pokémon.",
			en: "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon."
		}
	}, {
		cost: ["Grass", "Grass", "Fire"],

		name: {
			fr: "Laser Dragon",
			de: "Drachenlaser",
			es: "Láser Dragón",
			pt: "Laser do Dragão",
			it: "Dragolaser",
			en: "Dragon Laser"
		},

		effect: {
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card