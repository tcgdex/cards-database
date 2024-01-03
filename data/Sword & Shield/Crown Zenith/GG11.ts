import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Lunatone",
		fr: "Séléroc",
		es: "Lunatone",
		it: "Lunatone",
		pt: "Lunatone",
		de: "Lunastein"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Cycle Draw",
			fr: "Pioche Cyclique",
			es: "Ciclorrobo",
			it: "Pesca Ciclica",
			pt: "Compra Cíclica",
			de: "Kreiszug"
		},

		effect: {
			en: "Discard a card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			es: "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
			it: "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
			pt: "Descarte 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
			de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Moon Kinesis",
			fr: "Kinésie Lunaire",
			es: "Lunaquinesis",
			it: "Lunacinesi",
			pt: "Cinese Lunar",
			de: "Mondkinese"
		},

		effect: {
			en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card