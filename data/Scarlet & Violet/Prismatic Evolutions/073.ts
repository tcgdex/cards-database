import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Dragapult ex",
		fr: "Lanssorien-ex",
		es: "Dragapult ex",
		pt: "Dragapult ex",
		it: "Dragapult-ex",
		de: "Katapuldra-ex"
	},

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
			pt: "Cabeçada a Jato",
			it: "Zuccata Jet",
			de: "Flinke Kopfnuss"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			en: "Phantom Dive",
			fr: "Plongée Fantôme",
			es: "Picado Fantasma",
			pt: "Mergulho Fantasma",
			it: "Picchiata Spettrale",
			de: "Phantomsturzflug"
		},

		effect: {
			en: "Put 6 damage counters on your opponent's Benched Pokémon in any way you like.",
			fr: "Placez 6 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			es: "Pon 6 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			pt: "Coloque 6 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			it: "Metti sei segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			de: "Lege 6 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card