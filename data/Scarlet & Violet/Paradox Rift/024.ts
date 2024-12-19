import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Crocalor",
		fr: "Crocogril",
		es: "Crocalor",
		it: "Crocalor",
		pt: "Crocalor",
		de: "Lokroko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Rolling Fireball",
			fr: "Boule de Feu Roulante",
			es: "Bola de Fuego Rodante",
			it: "Palladifuoco Rotolante",
			pt: "Bola de Fogo Rolante",
			de: "Rollender Feuerball"
		},

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			es: "Pon 1 Energía unida a este Pokémon en tu mano.",
			it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma Energia ligada a este Pokémon na sua mão.",
			de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Fuecoco"
	}
}

export default card