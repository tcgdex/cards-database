import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
		es: "Sandslash",
		it: "Sandslash",
		pt: "Sandslash",
		de: "Sandamer"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Scratch",
				fr: "Griffe Continue",
				es: "Arañazo Incesante",
				it: "Graffio Infinito",
				pt: "Arranhão Contínuo",
				de: "Dauerkratzer"
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
				es: "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
				es: "Bucle Arena",
				it: "Sabbiotomba",
				pt: "Fosso de Areia",
				de: "Sandgrab"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372375,
		tcgplayer: 189183
	}
}

export default card
