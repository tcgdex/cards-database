import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [55],
	set: Set,

	name: {
		fr: "Akwakwak",
		en: "Golduck",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Sauvetage Aquatique",
			en: "Aquatic Rescue",
			es: "Rescate Acuático",
			it: "Idrosalvataggio",
			pt: "Resgate Aquático",
			de: "Wasserrettung"
		},

		effect: {
			fr: "Ajoutez jusqu'à 4 Pokémon de votre pile de défausse à votre main.",
			en: "Put up to 4 Pokémon from your discard pile into your hand.",
			es: "Pon hasta 4 Pokémon de tu pila de descartes en tu mano.",
			it: "Prendi fino a quattro Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
			pt: "Coloque até 4 Pokémon da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 4 Pokémon aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Super Éclaboussure",
			en: "Super Splash",
			es: "Supersalpicadura",
			it: "Super Splash",
			pt: "Superborrifada",
			de: "Superplatscher"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Taira Akitsu"
}

export default card