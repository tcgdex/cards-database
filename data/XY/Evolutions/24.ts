import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		61,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
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
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				es: "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Aquele Pokémon não poderá usar aquele ataque durante a próxima vez de jogar do seu oponente.",
				de: "Wähle 1 Angriff des Aktiven Pokémon deines Gegners. Das Pokémon kann den gewählten Angriff während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
				es: "Doble Bofetón",
				it: "Doppiasberla",
				pt: "Tapa Duplo",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 50 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
