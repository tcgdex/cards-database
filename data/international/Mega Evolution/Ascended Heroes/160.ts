import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dragapult ex",
		'fr-fr': "Lanssorien-ex",
		'es-es': "Dragapult ex",
		'es-mx': "Dragapult ex",
		'de-de': "Katapuldra-ex",
		'it-it': "Dragapult-ex",
		'pt-br': "Dragapult ex"
	},

	evolveFrom: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'es-mx': "Drakloak",
		'de-de': "Phandra",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [887],
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Jet Headbutt",
			'fr-fr': "Bélier Volant",
			'es-es': "Turbocabezazo",
			'es-mx': "Cabezazo Jet",
			'de-de': "Flinke Kopfnuss",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			'en-us': "Phantom Dive",
			'fr-fr': "Plongée Fantôme",
			'es-es': "Picado Fantasma",
			'es-mx': "Descenso Fantasma",
			'de-de': "Phantomsturzflug",
			'it-it': "Picchiata Spettrale",
			'pt-br': "Mergulho Fantasma"
		},

		effect: {
			'en-us': "Put 6 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 6 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'es-es': "Pon 6 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'es-mx': "Pon 6 contadores de daño en los Pokémon en Banca de tu rival de la manera que quieras.",
			'de-de': "Lege 6 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners.",
			'it-it': "Metti sei segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 6 contadores de dano nos Pokémon no Banco do seu oponente como desejar."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869771,
				tcgplayer: 675972
			}
		}
	],
}

export default card
