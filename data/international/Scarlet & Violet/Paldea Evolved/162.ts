import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [289],
	set: Set,

	name: {
		'fr-fr': "Monaflèmit",
		'en-us': "Slaking",
		'es-es': "Slaking",
		'it-it': "Slaking",
		'pt-br': "Slaking",
		'de-de': "Letarking"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Vigoroth",
		'en-us': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Sommeil Lourd",
			'en-us': "Stir and Snooze",
			'es-es': "Vuelta y Cabezadita",
			'it-it': "Lasciadormir",
			'pt-br': "Agitar e Acalmar",
			'de-de': "Umdrehen und Dösen"
		},

		effect: {
			'fr-fr': "Si ce Pokémon est Endormi, lancez 2 pièces au lieu d'une lors du Contrôle Pokémon. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
			'en-us': "If this Pokémon is Asleep, flip 2 coins instead of 1 during Pokémon Checkup. If either of them is tails, this Pokémon is still Asleep.",
			'es-es': "Si este Pokémon está Dormido, lanza 2 monedas en vez de una durante el Chequeo Pokémon. Si sale cruz en alguna de ellas, este Pokémon sigue Dormido.",
			'it-it': "Se questo Pokémon è addormentato, lancia due volte una moneta invece di una durante il controllo Pokémon. Se esce almeno una volta croce, questo Pokémon resta addormentato.",
			'pt-br': "Se este Pokémon estiver Adormecido, jogue 2 moedas ao invés de 1 durante o Checape Pokémon. Se qualquer uma delas sair coroa, este Pokémon permanecerá Adormecido.",
			'de-de': "Wenn dieses Pokémon schläft, wirf beim Pokémon-Check 2 Münzen anstelle von 1. Zeigt mindestens 1 Zahl, schläft dieses Pokémon weiter."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Coup de Tête Paresseux",
			'en-us': "Slacker's Headstrike",
			'es-es': "Cabezazo del Holgazán",
			'it-it': "Testata del Fannullone",
			'pt-br': "Golpe de Cabeça Preguiçoso",
			'de-de': "Lethargischer Kopftreffer"
		},

		effect: {
			'fr-fr': "Ce Pokémon est maintenant Endormi.",
			'en-us': "This Pokémon is now Asleep.",
			'es-es': "Este Pokémon pasa a estar Dormido.",
			'it-it': "Questo Pokémon viene addormentato.",
			'pt-br': "Este Pokémon agora está Adormecido.",
			'de-de': "Dieses Pokémon schläft jetzt."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715637,
				tcgplayer: 497580,
				cardtrader: 248819
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858720
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715637,
				tcgplayer: 497580,
				cardtrader: 248819
			}
		},
	],

	illustrator: "Yuya Oka",

	description: {
		'en-us': "It is the world's most slothful Pokémon. However, it can exert horrifying power by releasing pent-up energy all at once.",
	},
}

export default card
