import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [61],
	set: Set,

	name: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Hypnosis",
			'fr-fr': "Hypnose",
			'es-es': "Hipnosis",
			'it-it': "Ipnosi",
			'pt-br': "Hipnose",
			'de-de': "Hypnose"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Double Slap",
			'fr-fr': "Torgnoles",
			'es-es': "Doble Bofetón",
			'it-it': "Doppiasberla",
			'pt-br': "Tapa Duplo",
			'de-de': "Duplexhieb"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Its skin is moist all over its body. The skin on its belly spiral also feels smooth.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769216,
				tcgplayer: 550086
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769216,
				tcgplayer: 550086
			}
		},
	],

	illustrator: "OKACHEKE",

}

export default card