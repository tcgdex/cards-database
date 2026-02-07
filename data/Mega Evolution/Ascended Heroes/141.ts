import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Hoopa",
		fr: "Hoopa",
		es: "Hoopa",
		'es-mx': "Hoopa",
		de: "Hoopa",
		it: "Hoopa",
		pt: "Hoopa"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Filch",
			fr: "Maraudage",
			es: "Birlar",
			'es-mx': "Hurtar",
			de: "Mopsen",
			it: "Furtarello",
			pt: "Furtar"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Knuckle Impact",
			fr: "Coup d'Articulations",
			es: "Impacto Nudillo",
			'es-mx': "Impacto de Puño",
			de: "Knöchelprall",
			it: "Impatto Nocche",
			pt: "Impacto Ossudo"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675953,
		cardmarket: 869752
	}
}

export default card