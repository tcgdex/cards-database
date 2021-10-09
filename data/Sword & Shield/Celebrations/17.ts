import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Groudon",
		fr: "Groudon",
		es: "Groudon",
		it: "Groudon",
		pt: "Groudon",
		de: "Groudon"
	},

	rarity: "Rare",
	category: "Pokemon",
	types: ["Fighting"],
	illustrator: "Ryuta Fuse",
	hp: 130,
	stage: "Basic",

	attacks: [{
		name: {
			en: "Magma Volcano",
			fr: "Volcan Magma",
			es: "Volcán Magma",
			it: "Vulcano Magma",
			pt: "Vulcão Magma",
			de: "Magmavulkan"
		},

		effect: {
			en: "Discard the top 5 cards of your deck. This attack does 80 damage for each Energy card you discarded in this way.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts pour chaque carte Énergie défaussée de cette façon.",
			es: "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 80 puntos de daño por cada carta de Energía que hayas descartado de esta manera.",
			it: "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 80 danni per ogni carta Energia che hai scartato in questo modo.",
			pt: "Descarte as 5 cartas de cima do seu baralho. Este ataque causa 80 pontos de dano para cada carta de Energia descartada desta forma.",
			de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Energiekarte 80 Schadenspunkte zu."
		},

		damage: "80×",
		cost: ["Fighting", "Fighting", "Colorless"]
	}, {
		name: {
			en: "Massive Rend",
			fr: "Déchirure Massive",
			es: "Corte Masivo",
			it: "Supersquarcio",
			pt: "Laceração Massiva",
			de: "Riesiger Riss"
		},

		damage: "120",
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card
