import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [657],
	set: Set,

	name: {
		fr: "Croâporal",
		en: "Frogadier",
		es: "Frogadier",
		it: "Frogadier",
		pt: "Frogadier",
		de: "Amphizel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Bombarder",
			en: "Strafe",
			es: "Pasada de Ataque",
			it: "Mitragliare",
			pt: "Bombardear",
			de: "Beharken"
		},

		effect: {
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tonji Matsuno",

	thirdParty: {
		cardmarket: 725137
	}
}

export default card