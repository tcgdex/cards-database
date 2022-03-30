import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pain Amplifier",
				fr: "Amplificateur de Douleur",
				es: "Amplificador de Dolor",
				it: "Aumentapena",
				pt: "Ampliador da Dor",
				de: "Schmerzverstärker"
			},
			effect: {
				en: "Put 3 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
				fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
				es: "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él.",
				it: "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario che abbia dei segnalini danno.",
				pt: "Coloque 3 contadores de danos em cada um dos Pokémon do seu oponente que possua contadores de danos.",
				de: "Lege auf jedes Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 3 Schadensmarken."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knock Away",
				fr: "Asticotage",
				es: "Derribar",
				it: "Scaraventa",
				pt: "Jogar Longe",
				de: "Zurückschlagen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "70+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
