import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon ex",
		fr: "Noctali-ex",
		es: "Umbreon ex",
		pt: "Umbreon ex",
		it: "Umbreon-ex",
		de: "Nachtara-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Moon Mirage",
			fr: "Mirage Lunaire",
			es: "Espejismo Lunar",
			pt: "Miragem Lunar",
			it: "Miraggio Lunare",
			de: "Mondillusion"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 160
	}, {
		cost: ["Lightning", "Psychic", "Darkness"],

		name: {
			en: "Onyx",
			fr: "Onyx",
			es: "Ónice",
			pt: "Ônix",
			it: "Onice",
			de: "Onyx"
		},

		effect: {
			en: "Discard all Energy from this Pokémon, and take a Prize card.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon, puis récupérez une carte Récompense.",
			es: "Descarta todas las Energías de este Pokémon y coge 1 carta de Premio.",
			pt: "Descarte todas as Energias deste Pokémon e pegue uma carta de Prêmio.",
			it: "Scarta tutte le Energie da questo Pokémon e prendi una carta Premio.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel und nimm 1 Preiskarte."
		}
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "takuyoa",

	thirdParty: {
		cardmarket: 805449
	}
}

export default card