import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		it: "Lilligant",
		pt: "Lilligant",
		de: "Dressella"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
		es: "Petilil",
		it: "Petilil",
		pt: "Petilil",
		de: "Lilminip"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Boo-Hoo",
				fr: "Snif",
				es: "Buaaa",
				it: "Bua",
				pt: "Choradeira",
				de: "Geplärre"
			},
			effect: {
				en: "If your opponent attaches an Energy card from his or her hand to the Defending Pokémon during his or her next turn, that Pokémon will be Asleep.",
				fr: "Si votre adversaire attache une carte Énergie de sa main au Pokémon Défenseur pendant son prochain tour, le Pokémon ciblé sera Endormi.",
				es: "Si tu rival une 1 carta de Energía de su mano al Pokémon Defensor durante su próximo turno, ese Pokémon pasa a estar Dormido.",
				it: "Se il tuo avversario assegna una carta Energia dalla sua mano al Pokémon difensore durante il suo prossimo turno, quel Pokémon viene addormentato.",
				pt: "Se o seu oponente ligar um card de Energia da mão dele(a) ao Pokémon Defensor durante a próxima vez dele(a) jogar, aquele Pokémon ficará Adormecido.",
				de: "Wenn dein Gegner während seines nächsten Zuges 1 Energie von seiner Hand an das Verteidigende Pokémon anlegt, schläft jenes Pokémon ein."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Slice",
				fr: "Tranche Feuille",
				es: "Tajo de Hojas",
				it: "Tranciafoglia",
				pt: "Retalho de Folhas",
				de: "Blattschneide"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288183
	}
}

export default card
