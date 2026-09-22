import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It's said that Hydreigon grew ferocious because people in times long past loathed it, considering it to be evil incarnate and attacking it relentlessly."
	},

	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		de: "Trikephalo",
		es: "Hydreigon",
		it: "Hydreigon",
		'es-mx': "Hydreigon"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	dexId: [635],
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Three-Headed Bite",
			fr: "Morsure à Trois Têtes",
			de: "Dreiköpfiger Biss",
			es: "Mordisco Tritesta",
			it: "Morso Tricefalo",
			'es-mx': "Mordida Tricéfala"
		},

		effect: {
			en: "Flip 3 coins. For each heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez 3 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Wirf 3 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Lanza 3 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia tre volte una moneta. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'es-mx': "Lanza 3 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Pitch-Black Fangs",
			fr: "Crocs Nuit Noire",
			de: "Pechschwarze Fänge",
			es: "Colmillos Azabaches",
			it: "Zanne Buiopesto",
			'es-mx': "Colmillos Umbríos"
		},

		damage: 140,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907706,
				tcgplayer: 716492
			}
		}
	],
}

export default card
