import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Ursaluna",
		fr: "Ursaking",
		es: "Ursaluna",
		it: "Ursaluna",
		pt: "Ursaluna",
		de: "Ursaluna"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	evolveFrom: {
		en: "Ursaring",
		fr: "Ursaring",
		es: "Ursaring",
		it: "Ursaring",
		pt: "Ursaring",
		de: "Ursaring"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peat Hunt",
			fr: "Chasse Tourbe",
			es: "Caza de la Turba",
			it: "Cacciatorba",
			pt: "Caça-turfa",
			de: "Torfjagd"
		},

		effect: {
			en: "Put up to 2 cards from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 cartes de votre pile de défausse à votre main.",
			es: "Pon hasta 2 cartas de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Karten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bulky Bump",
			fr: "Impact Lourd",
			es: "Topetón Corpulento",
			it: "Gran Colpo",
			pt: "Colisão Robusta",
			de: "Wuchtiger Stoß"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658785
	}
}

export default card