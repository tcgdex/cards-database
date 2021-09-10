import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Lycanroc V",
		fr: "Lougaroc V",
		es: "Lycanroc V",
		it: "Lycanroc V",
		pt: "Lycanroc V",
		de: "Wolwerock V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "PLANETA Tsuji",
	suffix: "V",

	attacks: [{
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Rock Throw",
			de: "Steinwurf"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Crashing Fangs",
			fr: "Crocs Percutants",
			es: "Colmillos Demoledores",
			it: "Schiantazanne",
			pt: "Crashing Fangs",
			de: "Reißende Zähne"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "During your next turn, this Pokémon can’t attack.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card