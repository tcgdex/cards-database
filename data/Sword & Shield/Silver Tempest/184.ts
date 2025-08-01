import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Regidrago V",
		fr: "Regidrago V",
		es: "Regidrago V",
		it: "Regidrago V",
		pt: "Regidrago V",
		de: "Regidrago V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Celestial Roar",
			fr: "Cri du Ciel",
			es: "Rugido Celestial",
			it: "Gentilboato",
			pt: "Rugido Celestial",
			de: "Himmelsgrollen"
		},

		effect: {
			en: "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
			fr: "Défaussez les 3 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
			es: "Descarta las 3 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía, únelas a este Pokémon.",
			it: "Scarta le prime tre carte del tuo mazzo. Se fra queste ci sono delle carte Energia, assegnale a questo Pokémon.",
			pt: "Descarte as 3 cartas de cima do seu baralho. Se houver cartas de Energia entre elas, ligue-as a este Pokémon.",
			de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Wenn unter jenen Karten Energiekarten sind, lege sie an dieses Pokémon an."
		}
	}, {
		cost: ["Grass", "Grass", "Fire"],

		name: {
			en: "Dragon Laser",
			fr: "Laser Dragon",
			es: "Láser Dragón",
			it: "Dragolaser",
			pt: "Laser do Dragão",
			de: "Drachenlaser"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682182
	}
}

export default card