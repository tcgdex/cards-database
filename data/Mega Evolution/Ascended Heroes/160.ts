import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [887],

	name: {
		en: "Dragapult ex",
		fr: "Lanssorien-ex",
		es: "Dragapult ex",
		'es-mx': "Dragapult ex",
		de: "Katapuldra-ex",
		it: "Dragapult-ex",
		pt: "Dragapult ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
			es: "Turbocabezazo",
			'es-mx': "Cabezazo Jet",
			de: "Flinke Kopfnuss",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			en: "Phantom Dive",
			fr: "Plongée Fantôme",
			es: "Picado Fantasma",
			'es-mx': "Descenso Fantasma",
			de: "Phantomsturzflug",
			it: "Picchiata Spettrale",
			pt: "Mergulho Fantasma"
		},

		effect: {
			en: "Put 6 damage counters on your opponent's Benched Pokémon in any way you like.",
			fr: "Placez 6 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			es: "Pon 6 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'es-mx': "Pon 6 contadores de daño en los Pokémon en Banca de tu rival de la manera que quieras.",
			de: "Lege 6 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners.",
			it: "Metti sei segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			pt: "Coloque 6 contadores de dano nos Pokémon no Banco do seu oponente como desejar."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675972,
		cardmarket: 869771
	}
}

export default card