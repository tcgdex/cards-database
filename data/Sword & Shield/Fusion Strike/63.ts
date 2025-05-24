import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [259],
	set: Set,

	name: {
		en: "Marshtomp",
		fr: "Flobio",
		es: "Marshtomp",
		it: "Marshtomp",
		pt: "Marshtomp",
		de: "Moorabbel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
		es: "Mudkip",
		it: "Mudkip",
		pt: "Mudkip",
		de: "Hydropi"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		en: "Living on muddy ground that provides poor footing has made its legs sturdy."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			de: "Lehmschelle",
			es: "Bofetón Lodo",
			pt: "Tapa de Lama",
			it: "Fangosberla"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Energy Loop",
			fr: "Boucle d'Énergie",
			de: "Energieschleife",
			es: "Bucle de Energía",
			pt: "Loop de Energia",
			it: "Circuito Energetico"
		},

		damage: 80,

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand.",
			es: "Pon 1 Energía unida a este Pokémon en tu mano.",
			pt: "Coloque 1 Energia ligada a este Pokémon na sua mão.",
			it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card