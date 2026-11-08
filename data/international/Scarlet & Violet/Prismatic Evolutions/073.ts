import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [887],
	set: Set,

	name: {
		'en-us': "Dragapult ex",
		'fr-fr': "Lanssorien-ex",
		'es-es': "Dragapult ex",
		'pt-br': "Dragapult ex",
		'it-it': "Dragapult-ex",
		'de-de': "Katapuldra-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'pt-br': "Drakloak",
		'it-it': "Drakloak",
		'de-de': "Phandra"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Jet Headbutt",
			'fr-fr': "Bélier Volant",
			'es-es': "Turbocabezazo",
			'pt-br': "Cabeçada a Jato",
			'it-it': "Zuccata Jet",
			'de-de': "Flinke Kopfnuss"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			'en-us': "Phantom Dive",
			'fr-fr': "Plongée Fantôme",
			'es-es': "Picado Fantasma",
			'pt-br': "Mergulho Fantasma",
			'it-it': "Picchiata Spettrale",
			'de-de': "Phantomsturzflug"
		},

		effect: {
			'en-us': "Put 6 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 6 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'es-es': "Pon 6 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'pt-br': "Coloque 6 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'it-it': "Metti sei segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'de-de': "Lege 6 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "5ban Graphics",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805462,
				tcgplayer: 610428
			}
		},
	],
}

export default card
