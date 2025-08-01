import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [640],
	set: Set,

	name: {
		en: "Virizion",
		fr: "Viridium",
		es: "Virizion",
		it: "Virizion",
		pt: "Virizion",
		de: "Viridium"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kagemaru Himeno",

	description: {
		en: "Legends say this Pokémon confounded opponents with its swift movements."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bail Out",
			fr: "Renflouage",
			de: "Freilassen",
			es: "Sacar de Apuros",
			pt: "Salvamento",
			it: "Soccorso"
		},

		effect: {
			en: "Put up to 2 Pokémon from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 Pokémon de votre pile de défausse à votre main.",
			de: "Nimm bis zu 2 Pokémon aus deinem Ablagestapel auf deine Hand.",
			es: "Pon hasta 2 Pokémon de tu pila de descartes en tu mano.",
			pt: "Coloque até 2 Pokémon da sua pilha de descarte na sua mão.",
			it: "Prendi fino a due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			de: "Solarstrahl",
			es: "Rayo Solar",
			pt: "Raio Solar",
			it: "Solarraggio"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582056
	}
}

export default card