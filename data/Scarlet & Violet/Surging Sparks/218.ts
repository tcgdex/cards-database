import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [646],
	set: Set,

	name: {
		en: "Black Kyurem ex",
		fr: "Kyurem Noir-ex",
		es: "Kyurem Negro ex",
		it: "Kyurem Nero-ex",
		pt: "Kyurem Preto ex",
		de: "Schwarzes Kyurem-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Ice Age",
			fr: "Période Glaciaire",
			es: "Era de Hielo",
			it: "Era Glaciale",
			pt: "Era do Gelo",
			de: "Eiszeitalter"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a {N} Pokémon, it is now Paralyzed.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {N}, il est maintenant Paralysé.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon {N}, pasa a estar Paralizado.",
			it: "Se il Pokémon attivo del tuo avversario è di tipo {N}, viene paralizzato.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon {N}, ele agora estará Paralisado.",
			de: "Wenn das Aktive Pokémon deines Gegners ein {N}-Pokémon ist, ist es jetzt paralysiert."
		},

		damage: 90
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Black Frost",
			fr: "Givre Noir",
			es: "Escarcha Negra",
			it: "Nerogelo",
			pt: "Geada Negra",
			de: "Schwarzer Frost"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 250
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "N-DESIGN Inc."
}

export default card
