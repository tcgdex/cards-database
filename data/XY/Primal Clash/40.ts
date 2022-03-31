import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Whiscash",
		fr: "Barbicha",
		es: "Whiscash",
		it: "Whiscash",
		pt: "Whiscash",
		de: "Welsar"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		340,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Barboach",
		fr: "Barloche",
		es: "Barboach",
		it: "Barboach",
		pt: "Barboach",
		de: "Schmerbe"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				es: "Amnesia",
				it: "Amnesia",
				pt: "Amnésia",
				de: "Amnesie"
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Ce dernier ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
				es: "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Esse Pokémon não poderá usar esse ataque durante a próxima vez de jogar do seu oponente.",
				de: "Wähle 1 Angriff des Aktiven Pokémon deines Gegners. Das Pokémon kann den gewählten Angriff während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte Secrète",
				es: "Embestida Ascendente",
				it: "Elevazione",
				pt: "Investida Ascendente",
				de: "Aufwärtsstoß"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
