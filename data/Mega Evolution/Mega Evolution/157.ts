import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Abomasnow ex",
		fr: "Méga-Blizzaroi-ex",
		de: "Mega-Rexblisar-ex",
		it: "Mega Abomasnow-ex",
		es: "Mega-Abomasnow ex",
		pt: "Mega Abomasnow ex",
		'es-mx': "Mega-Abomasnow ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 350,
	types: ["Water"],
	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
		de: "Shnebedeck",
		it: "Snover",
		es: "Snover",
		pt: "Snover",
		'es-mx': "Snover"
	},
	stage: "Stage1",
	dexId: [460],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Hammer-lanche",
			fr: "Marte-lanche",
			de: "Hammerlawine",
			it: "Martelvalanga",
			es: "Impacto Avalancha",
			pt: "Paulada Avalanche",
			'es-mx': "Alud Martillador"
		},

		effect: {
			en: "Discard the top 6 cards of your deck, and this attack does 100 damage for each Basic {W} Energy card that you discarded in this way.",
			fr: "Défaussez les 6 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie {W} de base défaussée de cette façon.",
			de: "Lege die obersten 6 Karten deines Decks auf deinen Ablagestapel, und diese Attacke fügt für jede Basis-{W}-Energiekarte, die du auf diese Weise auf deinen Ablagestapel gelegt hast, 100 Schadenspunkte zu.",
			it: "Scarta le prime sei carte del tuo mazzo e questo attacco infligge 100 danni per ogni carta Energia base {W} che hai scartato in questo modo.",
			es: "Descarta las 6 primeras cartas de tu baraja, y este ataque hace 100 puntos de daño por cada carta de Energía {W} Básica que hayas descartado de esta manera.",
			pt: "Descarte as 6 cartas de cima do seu baralho, e este ataque causa 100 pontos de dano para cada carta de Energia {W} Básica descartada desta forma.",
			'es-mx': "Descarta las primeras 6 cartas de tu mazo, y este ataque hace 100 puntos de daño por cada carta de Energía {W} Básica que descartaste de esta manera."
		},

		damage: "100×"
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Frost Barrier",
			fr: "Barrière de Givre",
			de: "Frostschutz",
			it: "Gelobarriera",
			es: "Barrera Gélida",
			pt: "Barreira Congelada",
			'es-mx': "Barrera Gélida"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia)."
		},

		damage: 200
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		tcgplayer: 654496,
		cardmarket: 851228
	}
}

export default card