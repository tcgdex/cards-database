import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray ex",
		fr: "Luxray-ex",
		es: "Luxray ex",
		it: "Luxray-ex",
		pt: "Luxray ex",
		de: "Luxtra-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Piercing Gaze",
			fr: "Regard Perçant",
			es: "Mirada Penetrante",
			it: "Sguardo Penetrante",
			pt: "Olhar Perfurante",
			de: "Stechender Blick"
		},

		effect: {
			en: "Your opponent reveals their hand. Discard a card you find there.",
			fr: "Votre adversaire montre sa main. Défaussez une carte que vous y trouvez.",
			es: "Tu rival enseña las cartas de su mano. Descarta 1 carta que encuentres entre ellas.",
			it: "Il tuo avversario mostra le carte che ha in mano. Scartane una.",
			pt: "Seu oponente revela a mão dele. Descarte uma carta que encontrar lá.",
			de: "Dein Gegner zeigt dir seine Handkarten. Lege 1 Karte, die du dort findest, auf seinen Ablagestapel."
		},

		damage: 120
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Volt Strike",
			fr: "Frappe Volt",
			es: "Golpe Voltio",
			it: "Colpovolt",
			pt: "Golpe Voltaico",
			de: "Volttreffer"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 250
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "PLANETA Yamashita"
}

export default card