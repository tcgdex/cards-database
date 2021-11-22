import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Exploud",
		fr: "Brouhabam",
		es: "Exploud",
		it: "Exploud",
		pt: "Exploud",
		de: "Krawumms"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		295,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
				es: "Emboscada",
				it: "Imboscata",
				pt: "Emboscada",
				de: "Hinterhalt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cacophony",
				fr: "Cacophonie",
				es: "Cacofonía",
				it: "Dissonanza",
				pt: "Cacofonia",
				de: "Kakofonie"
			},
			effect: {
				en: "At the end of your opponent's next turn, discard the Defending Pokémon and all cards attached to it.",
				fr: "À la fin du prochain tour de votre adversaire, défaussez le Pokémon Défenseur et toutes les cartes qui lui sont attachées.",
				es: "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él.",
				it: "Alla fine del turno del tuo avversario, scarta il Pokémon difensore e tutte le carte assegnategli.",
				pt: "Ao final da vez de jogar do seu oponente, descarte o Pokémon Defensor e todos os cards ligados a ele.",
				de: "Lege am Ende des nächsten Zuges deines Gegners das Verteidigende Pokémon und alle daran angelegten Karten auf dessen Ablagestapel."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
