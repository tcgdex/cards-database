import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop"
	},

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Eerie Wave",
				fr: "Vague Étrange",
				es: "Onda Sobrecogedora",
				it: "Ondamistero",
				pt: "Onda Misteriosa",
				de: "Gespenstische Woge"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Random Peck",
				fr: "Coup d’Bec au Pif",
				es: "Picotazo al Azar",
				it: "Beccata Casuale",
				pt: "Bicada Aleatória",
				de: "Zufälliger Schnabelhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano a mais para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
