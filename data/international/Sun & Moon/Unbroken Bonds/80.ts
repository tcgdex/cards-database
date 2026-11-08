import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
		'es-es': "Meowstic",
		'it-it': "Meowstic",
		'pt-br': "Meowstic",
		'de-de': "Psiaugon"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Caturday",
				'fr-fr': "Chamedi",
				'es-es': "Sábado Gatuno",
				'it-it': "Giornogatto",
				'pt-br': "Dia de Gato",
				'de-de': "Schnurrtag"
			},
			effect: {
				'en-us': "Draw 3 cards. If you do, this Pokémon is now Asleep.",
				'fr-fr': "Piochez 3 cartes. Dans ce cas, ce Pokémon est maintenant Endormi.",
				'es-es': "Roba 3 cartas. Si lo haces, este Pokémon pasa a estar Dormido.",
				'it-it': "Pesca tre carte. Se lo fai, questo Pokémon viene addormentato.",
				'pt-br': "Compre 3 cartas. Se fizer isto, este Pokémon será Adormecido.",
				'de-de': "Ziehe 3 Karten. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Perplexing Eyes",
				'fr-fr': "Regard Déroutant",
				'es-es': "Ojos Desconcertantes",
				'it-it': "Sguardo Sconcertante",
				'pt-br': "Olhos Perplexos",
				'de-de': "Verblüffende Augen"
			},
			effect: {
				'en-us': "The Defending Pokémon’s Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn’t change.)",
				'fr-fr': "La Faiblesse du Pokémon Défenseur est maintenant de type Psychic jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
				'es-es': "La Debilidad del Pokémon Defensor pasa a ser Psychic hasta el final de tu próximo turno. (La cantidad de Debilidad no cambia).",
				'it-it': "La debolezza del Pokémon difensore diventa Psychic fino alla fine del tuo prossimo turno. Quanto è debole non cambia.",
				'pt-br': "A Fraqueza do Pokémon Defensor será Psychic até o final da sua próxima vez de jogar (a quantidade de Fraqueza não muda).",
				'de-de': "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt Psychic. (Die Höhe der Schwäche ändert sich nicht.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When in danger, it raises its ears and releases enough psychic power to grind a 10-ton truck into dust.",
	},

	thirdParty: {
		cardmarket: 372372,
		tcgplayer: 189180
	}
}

export default card
