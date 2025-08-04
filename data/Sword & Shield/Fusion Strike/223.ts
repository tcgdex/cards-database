import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [832],
	set: Set,

	name: {
		en: "Dubwool",
		fr: "Moumouflon",
		es: "Dubwool",
		it: "Dubwool",
		pt: "Dubwool",
		de: "Zwollock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Wooloo",
		fr: "Moumouton",
		es: "Wooloo",
		it: "Wooloo",
		pt: "Wooloo",
		de: "Wolly"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "Its majestic horns are meant only to impress the opposite gender. They never see use in battle."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bounce",
			fr: "Rebond",
			de: "Sprungfeder",
			es: "Bote",
			pt: "Ricochete",
			it: "Rimbalzo"
		},

		damage: 30,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			de: "Rolltackle",
			es: "Placaje Giro",
			pt: "Golpe de Colisão Rolante",
			it: "Rollazione"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582959,
		tcgplayer: 253324
	}
}

export default card