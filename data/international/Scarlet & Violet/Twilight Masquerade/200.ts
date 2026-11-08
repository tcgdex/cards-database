import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [887],
	set: Set,

	name: {
		'en-us': "Dragapult ex",
		'fr-fr': "Lanssorien-ex",
		'es-es': "Dragapult ex",
		'it-it': "Dragapult-ex",
		'pt-br': "Dragapult ex",
		'de-de': "Katapuldra-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
		'de-de': "Phandra"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Jet Headbutt",
			'fr-fr': "Bélier Volant",
			'es-es': "Turbocabezazo",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato",
			'de-de': "Flinke Kopfnuss"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			'en-us': "Phantom Dive",
			'fr-fr': "Plongée Fantôme",
			'es-es': "Picado Fantasma",
			'it-it': "Picchiata Spettrale",
			'pt-br': "Mergulho Fantasma",
			'de-de': "Phantomsturzflug"
		},

		effect: {
			'en-us': "Put 6 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 6 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'es-es': "Pon 6 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'it-it': "Metti sei segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 6 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'de-de': "Lege 6 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769374,
				tcgplayer: 550244
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card