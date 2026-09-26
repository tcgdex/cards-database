import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	dexId: [215],

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		'es-mx': "Sneasel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fury Swipes",
			fr: "Combo-griffe",
			de: "Kratzfurie",
			es: "Golpes Furia",
			it: "Sfuriate",
			pt: "Golpes de Fúria",
			'es-mx': "Garras Furiosas"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
			de: "Wirf drei Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu.",
			es: "Echa 3 monedas a cara o cruz. Este ataque hace 10 puntos de daño multiplicado por la cantidad de caras que hayan salido.",
			it: "Lancia 3 volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Tire \"cara ou coroa\" 3 vezes. Este ataque causa 10 pts. de dano vezes o número de \"caras\".",
			'es-mx': "Tira 3 monedas a cara o cruz. Este ataque hace 10 puntos de daño multiplicado por la cantidad de caras que salieron."
		},

		damage: "10×",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Beat Up",
			fr: "Baston",
			de: "Prügler",
			es: "Paliza",
			it: "Picchiaduro",
			pt: "Espancar",
			'es-mx': "Paliza"
		},

		effect: {
			en: "Flip a coin for each of your Pokémon in play (including this one). This attack does 20 damage times the number of heads.",
			fr: "Lancez une pièce pour chacun de vos Pokémon en jeu <em>(y compris celui-là)</em>. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			de: "Wirf eine Münze für jedes deiner Pokémon im Spiel (einschließlich dieses Pokémon). Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu.",
			es: "Echa una moneda a cara o cruz por cada uno de los Pokémon que tengas en juego <em>(incluyendo éste)</em>. Este ataque hace 20 puntos de daño multiplicado por la cantidad de caras que hayan salido.",
			it: "Lancia una moneta tante volte quanti sono i tuoi Pokémon in gioco (incluso questo). Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Tire \"cara ou coroa\" para cada um dos seus Pokémon em jogo (incluindo este). Este ataque causa 20 pts. de dano vezes o número de \"caras\".",
			'es-mx': "Tira una moneda a cara o cruz por cada uno de los Pokémon que tengas en juego <em>(incluyendo éste)</em>. Este ataque hace 20 puntos de daño multiplicado por la cantidad de caras que salieron."
		},

		damage: "20×",
		cost: ["Darkness", "Darkness"]
	}],

	resistances: [{
		type: "Psychic",
		value: "-30"
	}],

	retreat: 0,
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907943,
				tcgplayer: 716161
			}
		}
	],
}

export default card
