import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'pt-br': "Exeggutor",
		'de-de': "Kokowei"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Hypnoblast",
			'fr-fr': "Hypnoblast",
			'es-es': "Hipnorrayo",
			'it-it': "Ipnobomba",
			'pt-br': "Borrifada Hipnótica",
			'de-de': "Hypnoschuss"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Psychic Loop",
			'fr-fr': "Boucle Psy",
			'es-es': "Bucle Psíquico",
			'it-it': "Circuito Psichico",
			'pt-br': "Loop Psíquico",
			'de-de': "Psychoschleife"
		},

		effect: {
			'en-us': "Put 2 Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
			'es-es': "Pon 2 Energías unidas a este Pokémon en tu mano.",
			'it-it': "Prendi due Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque 2 Energias ligadas a este Pokémon na sua mão.",
			'de-de': "Nimm 2 an dieses Pokémon angelegte Energien auf deine Hand."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751557,
				tcgplayer: 534170,
				cardtrader: 274208
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751557,
				tcgplayer: 534170,
				cardtrader: 274208
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

	description: {
		'en-us': "When they work together, Exeggutor's three heads can put out powerful psychic energy. Cloudy days make this Pokémon sluggish.",
	},

}

export default card
