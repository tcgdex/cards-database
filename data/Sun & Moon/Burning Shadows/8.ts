import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		pt: "Tangrowth",
		de: "Tangoloss"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-Sangsue",
				es: "Gigadrenado",
				it: "Gigassorbimento",
				pt: "Gigadreno",
				de: "Gigasauger"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crosswise Whip",
				fr: "Fouets Croisés",
				es: "Latigazo Cruzado",
				it: "Frustaincrociata",
				pt: "Chicote Cruzado",
				de: "Kreuzschlag"
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 299415
	}
}

export default card
