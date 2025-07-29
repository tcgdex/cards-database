import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Huntail",
		fr: "Serpang",
		es: "Huntail",
		it: "Huntail",
		pt: "Huntail",
		de: "Aalabyss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		367,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
		es: "Clamperl",
		it: "Clamperl",
		pt: "Clamperl",
		de: "Perlu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Powerful Storm",
				fr: "Tempête Puissante",
				es: "Tormenta Recia",
				it: "Tempestona",
				pt: "Tempestade Poderosa",
				de: "Mächtiger Sturm"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a todos tus Pokémon.",
				it: "Questo attacco infligge 20 danni per ogni Energia assegnata ai tuoi Pokémon.",
				pt: "Esse ataque causa 20 de danos vezes a quantidade de Energia ligada a todos os seus Pokémon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an all deine Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
				es: "Triturar",
				it: "Sgranocchio",
				pt: "Mastigada",
				de: "Knirscher"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 70,

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
		cardmarket: 273581
	}
}

export default card
