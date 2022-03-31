import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
		es: "Cloyster",
		it: "Cloyster",
		pt: "Cloyster",
		de: "Austos"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		91,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
		es: "Shellder",
		it: "Shellder",
		pt: "Shellder",
		de: "Muschas"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Clamp Crush",
				fr: "Pince Broyeuse",
				es: "Machaque Tenaza",
				it: "Rompimorsa",
				pt: "Captura Esmagadora",
				de: "Quetschklammer"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and discard an Energy attached to that Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie lui étant attachée.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado, y descartas 1 Energía unida a ese Pokémon.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e scarti un'Energia assegnata a quel Pokémon.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado e uma Energia ligada a ele deverá ser descartada.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert. Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
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
				en: "Spike Cannon",
				fr: "Picanon",
				es: "Clavo Cañón",
				it: "Sparalance",
				pt: "Canhão de Espinhos",
				de: "Dornkanone"
			},
			effect: {
				en: "Flip 5 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 5 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 5 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia cinque volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 5 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 5 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

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
