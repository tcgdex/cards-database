import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [124],
	set: Set,

	name: {
		fr: "Lippoutou-ex",
		en: "Jynx ex",
		es: "Jynx ex",
		it: "Jynx-ex",
		pt: "Jynx ex",
		de: "Rossana-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Baiser Coup de Foudre",
			en: "Heart-Stopping Kiss",
			es: "Beso de Infarto",
			it: "Bacio Fatale",
			pt: "Beijo Arrasa Coração",
			de: "Herzzerreißender Kuss"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est Endormi, il est mis K.O.",
			en: "If your opponent's Active Pokémon is Asleep, it is Knocked Out.",
			es: "Si el Pokémon Activo de tu rival está Dormido, queda Fuera de Combate.",
			it: "Se il Pokémon attivo del tuo avversario è addormentato, viene messo KO.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Adormecido, ele será Nocauteado.",
			de: "Wenn das Aktive Pokémon deines Gegners schläft, ist es kampfunfähig."
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			fr: "Vent Glace",
			en: "Icy Wind",
			es: "Viento Hielo",
			it: "Ventogelato",
			pt: "Vento Congelante",
			de: "Eissturm"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Ayaka Yoshida",

	thirdParty: {
		cardmarket: 733786
	}
}

export default card