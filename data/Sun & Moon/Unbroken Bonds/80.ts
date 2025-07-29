import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		es: "Meowstic",
		it: "Meowstic",
		pt: "Meowstic",
		de: "Psiaugon"
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
		en: "Espurr",
		fr: "Psystigri",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Caturday",
				fr: "Chamedi",
				es: "Sábado Gatuno",
				it: "Giornogatto",
				pt: "Dia de Gato",
				de: "Schnurrtag"
			},
			effect: {
				en: "Draw 3 cards. If you do, this Pokémon is now Asleep.",
				fr: "Piochez 3 cartes. Dans ce cas, ce Pokémon est maintenant Endormi.",
				es: "Roba 3 cartas. Si lo haces, este Pokémon pasa a estar Dormido.",
				it: "Pesca tre carte. Se lo fai, questo Pokémon viene addormentato.",
				pt: "Compre 3 cartas. Se fizer isto, este Pokémon será Adormecido.",
				de: "Ziehe 3 Karten. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Perplexing Eyes",
				fr: "Regard Déroutant",
				es: "Ojos Desconcertantes",
				it: "Sguardo Sconcertante",
				pt: "Olhos Perplexos",
				de: "Verblüffende Augen"
			},
			effect: {
				en: "The Defending Pokémon’s Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn’t change.)",
				fr: "La Faiblesse du Pokémon Défenseur est maintenant de type Psychic jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
				es: "La Debilidad del Pokémon Defensor pasa a ser Psychic hasta el final de tu próximo turno. (La cantidad de Debilidad no cambia).",
				it: "La debolezza del Pokémon difensore diventa Psychic fino alla fine del tuo prossimo turno. Quanto è debole non cambia.",
				pt: "A Fraqueza do Pokémon Defensor será Psychic até o final da sua próxima vez de jogar (a quantidade de Fraqueza não muda).",
				de: "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt Psychic. (Die Höhe der Schwäche ändert sich nicht.)"
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

	thirdParty: {
		cardmarket: 372372
	}
}

export default card
