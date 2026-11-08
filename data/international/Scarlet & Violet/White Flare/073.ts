import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [505],
	set: Set,

	name: {
		'en-us': "Watchog",
		'fr-fr': "Miradar",
		'de-de': "Kukmarda",
		'it-it': "Watchog",
		'pt-br': "Watchog",
		'es-es': "Watchog",
		'es-mx': "Watchog"
	},

	illustrator: "Ounishi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'de-de': "Nagelotz",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'es-es': "Patrat",
		'es-mx': "Patrat"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Focus Energy",
			'fr-fr': "Puissance",
			'de-de': "Energiefokus",
			'it-it': "Focalenergia",
			'pt-br': "Focalizar Energia",
			'es-es': "Foco Energía",
			'es-mx': "Centrar Energía"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Hyper Fang attack's base damage is 240.",
			'fr-fr': "Pendant votre prochain tour, les dégâts de base de l'attaque Croc de Mort de ce Pokémon sont de 240.",
			'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Hyperzahn dieses Pokémon 240 Schadenspunkte.",
			'it-it': "Durante il tuo prossimo turno, i danni base dell'attacco Iperzanna di questo Pokémon sono 240.",
			'pt-br': "Durante o seu próximo turno, o dano base do ataque Hiperpresa deste Pokémon será 240.",
			'es-es': "Durante tu próximo turno, el daño básico del ataque Hipercolmillo de este Pokémon es de 240 puntos de daño.",
			'es-mx': "Durante tu próximo turno, el daño base del ataque Hipercolmillo de este Pokémon es de 240 puntos de daño."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Hyper Fang",
			'fr-fr': "Croc de Mort",
			'de-de': "Hyperzahn",
			'it-it': "Iperzanna",
			'pt-br': "Hiperpresa",
			'es-es': "Hipercolmillo",
			'es-mx': "Hipercolmillo"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836034,
				tcgplayer: 642186
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836034,
				tcgplayer: 642186
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836630,
				tcgplayer: 642427
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836631,
				tcgplayer: 642355
			}
		},
	],
}

export default card
