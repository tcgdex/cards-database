import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		en: "Misty's Gyarados",
		fr: "Léviator d'Ondine",
		de: "Mistys Garados",
		it: "Gyarados di Misty",
		es: "Gyarados de Misty",
		pt: "Gyarados da Misty",
		'es-mx': "Gyarados de Misty"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Splashing Panic",
			fr: "Panique Éclaboussante",
			de: "Platscherpanik",
			it: "Panico Inondante",
			es: "Salpicadura de Pánico",
			pt: "Borrifando Pânico",
			'es-mx': "Pánico Salpicador"
		},

		effect: {
			en: "Discard the top 7 cards of your deck, and this attack does 70 damage for each Misty's Pokémon that you discarded in this way.",
			fr: "Défaussez les 7 cartes du dessus de votre deck. Cette attaque inflige 70 dégâts pour chaque Pokémon d'Ondine défaussé de cette façon.",
			de: "Lege die obersten 7 Karten deines Decks auf deinen Ablagestapel, und diese Attacke fügt für jedes Mistys Pokémon, das du auf diese Weise auf deinen Ablagestapel gelegt hast, 70 Schadenspunkte zu.",
			it: "Scarta le prime sette carte del tuo mazzo e questo attacco infligge 70 danni per ogni Pokémon di Misty che hai scartato in questo modo.",
			es: "Descarta las 7 primeras cartas de tu baraja, y este ataque hace 70 puntos de daño por cada Pokémon de Misty que hayas descartado de esta manera.",
			pt: "Descarte as 7 cartas de cima do seu baralho, e este ataque causa 70 pontos de dano para cada Pokémon da Misty descartado desta forma.",
			'es-mx': "Descarta las primeras 7 cartas de tu mazo, y este ataque hace 70 puntos de daño por cada Pokémon de Misty que descartaste de esta manera."
		},

		damage: "70×"
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Waterfall",
			fr: "Cascade",
			de: "Kaskade",
			it: "Cascata",
			es: "Cascada",
			pt: "Cachoeira",
			'es-mx': "Cascada"
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
		{
			type: 'holo',
			stamp: [
				"set-logo"
			]
		},
		{
			type: 'holo',
			stamp: [
				"set-logo",
				"staff"
			]
		}
	]
}

export default card
