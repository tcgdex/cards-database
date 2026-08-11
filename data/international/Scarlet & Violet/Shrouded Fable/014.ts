import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [461],
	set: Set,

	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 40
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Hail Claw",
			'fr-fr': "Griffe Grêle",
			'es-es': "Garra Granizo",
			'it-it': "Artiglio di Grandine",
			'pt-br': "Garra de Granizo",
			'de-de': "Hagelklaue"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Descarta todas las Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Scarta tutte le Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Descarte todas as Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
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


	illustrator: "aspara",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780904,
				tcgplayer: 560324
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780904,
				tcgplayer: 560324
			}
		},
	],
}

export default card
