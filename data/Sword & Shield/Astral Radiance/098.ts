import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		en: "Darkrai V",
		fr: "Darkrai V",
		es: "Darkrai V",
		it: "Darkrai V",
		pt: "Darkrai V",
		de: "Darkrai V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Wind of Darkness",
			fr: "Vent Obscur",
			es: "Viento de Oscuridad",
			it: "Vento dell'Oscurità",
			pt: "Vento da Escuridão",
			de: "Wind der Finsternis"
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Dark Void",
			fr: "Trou Noir",
			es: "Brecha Negra",
			it: "Vuototetro",
			pt: "Vácuo da Escuridão",
			de: "Schlummerort"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658747,
		tcgplayer: 272299
	}
}

export default card
