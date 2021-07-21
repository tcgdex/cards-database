import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Golem",
		fr: "Grolem d’Alola",
		es: "Golem de Alola",
		it: "Golem di Alola",
		pt: "Golem de Alola",
		de: "Alola-Geowaz"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 160,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electromagnetic Rock Wrecker",
				fr: "Roc-Boulet Électromagnétique",
				es: "Romperrocas Electromagnético",
				it: "Devastomasso Elettromagnetico",
				pt: "Demolidor de Pedras Eletromagnético",
				de: "Elektromagnetischer Felswerfer"
			},
			effect: {
				en: "Flip a coin for each Lightning Energy attached to this Pokémon. This attack does 80 damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Lightning attachée à ce Pokémon. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda por cada Energía Lightning unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia una moneta per ogni Energia Lightning assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda para cada Energia Lightning ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
				de: "Wirf 1 Münze für jede an dieses Pokémon angelegte Lightning-Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Slam",
				fr: "Tacle Lourd",
				es: "Cuerpo Pesado",
				it: "Pesobomba",
				pt: "Golpe Pesado",
				de: "Rammboss"
			},
			effect: {
				en: "This attack does 30 less damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				fr: "Cette attaque inflige 30 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño menos por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in meno per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a menos para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 30 Schadenspunkte weniger mal der Anzahl der Colorless-Symbole in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "200-",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
