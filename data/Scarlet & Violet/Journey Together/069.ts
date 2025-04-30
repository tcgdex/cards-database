import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu ex",
		fr: "Mimiqui-ex",
		es: "Mimikyu ex",
		de: "Mimigma-ex",
		it: "Mimikyu-ex",
		pt: "Mimikyu ex",
		'es-mx': "Mimikyu ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mischievous Hands",
			fr: "Mains Malicieuses",
			es: "Manos Traviesas",
			de: "Dreiste Hände",
			it: "Mani Birichine",
			pt: "Mãos Maliciosas",
			'es-mx': "Manos Traviesas"
		},

		effect: {
			en: "Choose 2 of your opponent's Pokémon and put 3 damage counters on each of them.",
			fr: "Choisissez 2 des Pokémon de votre adversaire, puis placez 3 marqueurs de dégâts sur chacun d'eux.",
			es: "Elige 2 de los Pokémon de tu rival y pon 3 contadores de daño en cada uno de ellos.",
			de: "Wähle 2 Pokémon deines Gegners und lege 3 Schadensmarken auf jedes von ihnen.",
			it: "Scegli due dei Pokémon del tuo avversario e metti tre segnalini danno su ciascuno di essi.",
			pt: "Escolha 2 dos Pokémon do seu oponente e coloque 3 contadores de dano em cada um deles.",
			'es-mx': "Elige 2 de los Pokémon de tu rival y pon 3 contadores de daño en cada uno de ellos."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Ghostly Trip",
			fr: "Vision Spectrale",
			es: "Zancadilla Fantasmal",
			de: "Gruseltour",
			it: "Sgambetto Spettrale",
			pt: "Tropeço Fantasmagórico",
			'es-mx': "Tambaleo Fantasmal"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
