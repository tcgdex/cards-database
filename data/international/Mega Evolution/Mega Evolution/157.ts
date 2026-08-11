import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Abomasnow ex",
		'fr-fr': "Méga-Blizzaroi-ex",
		'de-de': "Mega-Rexblisar-ex",
		'it-it': "Mega Abomasnow-ex",
		'es-es': "Mega-Abomasnow ex",
		'pt-br': "Mega Abomasnow ex",
		'es-mx': "Mega-Abomasnow ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 350,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'de-de': "Shnebedeck",
		'it-it': "Snover",
		'es-es': "Snover",
		'pt-br': "Snover",
		'es-mx': "Snover"
	},
	stage: "Stage1",
	dexId: [460],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Hammer-lanche",
			'fr-fr': "Marte-lanche",
			'de-de': "Hammerlawine",
			'it-it': "Martelvalanga",
			'es-es': "Impacto Avalancha",
			'pt-br': "Paulada Avalanche",
			'es-mx': "Alud Martillador"
		},

		effect: {
			'en-us': "Discard the top 6 cards of your deck, and this attack does 100 damage for each Basic {W} Energy card that you discarded in this way.",
			'fr-fr': "Défaussez les 6 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie {W} de base défaussée de cette façon.",
			'de-de': "Lege die obersten 6 Karten deines Decks auf deinen Ablagestapel, und diese Attacke fügt für jede Basis-{W}-Energiekarte, die du auf diese Weise auf deinen Ablagestapel gelegt hast, 100 Schadenspunkte zu.",
			'it-it': "Scarta le prime sei carte del tuo mazzo e questo attacco infligge 100 danni per ogni carta Energia base {W} che hai scartato in questo modo.",
			'es-es': "Descarta las 6 primeras cartas de tu baraja, y este ataque hace 100 puntos de daño por cada carta de Energía {W} Básica que hayas descartado de esta manera.",
			'pt-br': "Descarte as 6 cartas de cima do seu baralho, e este ataque causa 100 pontos de dano para cada carta de Energia {W} Básica descartada desta forma.",
			'es-mx': "Descarta las primeras 6 cartas de tu mazo, y este ataque hace 100 puntos de daño por cada carta de Energía {W} Básica que descartaste de esta manera."
		},

		damage: "100×"
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Frost Barrier",
			'fr-fr': "Barrière de Givre",
			'de-de': "Frostschutz",
			'it-it': "Gelobarriera",
			'es-es': "Barrera Gélida",
			'pt-br': "Barreira Congelada",
			'es-mx': "Barrera Gélida"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia)."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851228,
				tcgplayer: 654496
			}
		},
	],
}

export default card
