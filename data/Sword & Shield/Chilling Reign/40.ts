import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [788],
	set: Set,

	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
		es: "Tapu Fini",
		it: "Tapu Fini",
		pt: "Tapu Fini",
		de: "Kapu-Kime"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Smash Turn",
			fr: "Tour Fracassant",
			es: "Golpe Giro",
			it: "Girata Distruttiva",
			pt: "Virada Esmagadora",
			de: "Abdrehender Schmetterer"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			en: "Ocean Loop",
			fr: "Boucle Océanique",
			es: "Bucle Oceánico",
			it: "Circuito Oceanico",
			pt: "Loop Oceânico",
			de: "Meereskreislauf"
		},

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			es: "Pon 1 Energía unida a este Pokémon en tu mano.",
			it: "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			pt: "Coloque 1 Energia ligada a este Pokémon na sua mão.",
			de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Although it's called a guardian deity, terrible calamities sometimes befall those who recklessly approach Tapu Fini."
	}
}

export default card
