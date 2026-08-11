import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'es-mx': "Weavile",
		'de-de': "Snibunna",
		'it-it': "Weavile",
		'pt-br': "Weavile"
	},

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'es-mx': "Sneasel",
		'de-de': "Sniebel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
	},

	illustrator: "aspara",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [461],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'es-mx': "Cuchillada",
			'de-de': "Schlitzer",
			'it-it': "Lacerazione",
			'pt-br': "Talho"
		},

		damage: 40
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Hail Claw",
			'fr-fr': "Griffe Grêle",
			'es-es': "Garra Granizo",
			'es-mx': "Garra Granizo",
			'de-de': "Hagelklaue",
			'it-it': "Artiglio di Grandine",
			'pt-br': "Garra de Granizo"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Descarta todas las Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Descarta todas las Energías de este Pokémon. El Pokémon Activo de tu rival ahora está Paralizado.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert.",
			'it-it': "Scarta tutte le Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Descarte todas as Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "They travel in groups of four or five, leaving signs for one another on trees and rocks. They bring down their prey with coordinated attacks.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869656,
			tcgplayer: 675857
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870210,
			tcgplayer: 676889
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870209,
			tcgplayer: 677029
		}
	},
],
}

export default card
