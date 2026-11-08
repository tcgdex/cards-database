import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [869],
	set: Set,

	name: {
		'en-us': "Alcremie",
		'fr-fr': "Charmilly",
		'es-es': "Alcremie",
		'it-it': "Alcremie",
		'pt-br': "Alcremie",
		'de-de': "Pokusan"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'de-de': "Hokumil"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Colorful Confection",
			'fr-fr': "Friandise Colorée",
			'es-es': "Dulces de Colores",
			'it-it': "Dolcetti Colorati",
			'pt-br': "Confeitos Coloridos",
			'de-de': "Buntes Konfekt"
		},

		effect: {
			'en-us': "Search your deck for up to 5 Pokémon that are the same type as any Basic Energy attached to this Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 5 Pokémon de mêmes types que les Énergies de base attachées à ce Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 5 Pokémon que sean del mismo tipo que alguna de las Energías Básicas unidas a este Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a cinque Pokémon che sono dello stesso tipo di qualsiasi Energia base assegnata a questo Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 5 Pokémon no seu baralho que sejam do mesmo tipo de qualquer Energia Básica ligada a este Pokémon, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 5 Pokémon, die denselben Typ haben wie eine beliebige an dieses Pokémon angelegte Basis-Energie, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico",
			'de-de': "Magischer Schuss"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785919,
				tcgplayer: 567291
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785919,
				tcgplayer: 567291
			}
		},
	],

	illustrator: "Natsumi Yoshida",

}

export default card
