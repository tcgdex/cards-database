import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		en: "Avalugg",
		fr: "Séracrawl",
		es: "Avalugg",
		'es-mx': "Avalugg",
		de: "Arktilas",
		it: "Avalugg",
		pt: "Avalugg"
	},

	illustrator: "Tomomi Kaneko",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [713],
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		en: "Bergmite"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Iceberg Breaker",
			fr: "Destruction Iceberg",
			es: "Rompeiceberg",
			'es-mx': "Rompeicebergs",
			de: "Eisbergbrecher",
			it: "Iceberg Distruttore",
			pt: "Quebra-iceberg"
		},

		cost: ["Water"],

		effect: {
			en: "Discard the top 6 cards of your deck, and this attack does 60 damage for each Basic {W} Energy card you discarded in this way.",
			fr: "Défaussez les 6 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts pour chaque carte Énergie {W} de base défaussée de cette façon.",
			es: "Descarta las 6 primeras cartas de tu baraja, y este ataque hace 60 puntos de daño por cada carta de Energía {W} Básica que hayas descartado de esta manera.",
			'es-mx': "Descarta las primeras 6 cartas de tu mazo, y este ataque hace 60 puntos de daño por cada carta de Energía {W} Básica que descartaste de esta manera.",
			de: "Lege die obersten 6 Karten deines Decks auf deinen Ablagestapel, und diese Attacke fügt für jede auf diese Weise abgelegte Basis-{W}-Energiekarte 60 Schadenspunkte zu.",
			it: "Scarta le prime sei carte del tuo mazzo e questo attacco infligge 60 danni per ogni carta Energia base {W} che hai scartato in questo modo.",
			pt: "Descarte as 6 cartas de cima do seu baralho, e este ataque causa 60 pontos de dano para cada carta de Energia {W} Básica descartada desta forma."
		},

		damage: "60×"
	}, {
		name: {
			en: "Frost Stamp",
			fr: "Piétinement Givré",
			es: "Pisada Gélida",
			'es-mx': "Pisotón Gélido",
			de: "Froststoß",
			it: "Geloimpronta",
			pt: "Selo Congelante"
		},

		cost: ["Water", "Water", "Colorless", "Colorless"],
		damage: 160
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886416,
				tcgplayer: 693448
			}
		},
	],
}

export default card
