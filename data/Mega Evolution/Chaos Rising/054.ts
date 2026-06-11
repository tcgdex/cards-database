import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886446,
				tcgplayer: 693544
			}
		},
	],

	name: {
		en: "Skuntank",
		fr: "Moufflair",
		es: "Skuntank",
		'es-mx': "Skuntank",
		de: "Skuntank",
		it: "Skuntank",
		pt: "Skuntank"
	},

	illustrator: "Yuriko Akase",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [435],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Stunky"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			'es-mx': "Patada Trasera",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			pt: "Chute Traseiro"
		},

		cost: ["Darkness"],
		damage: 40
	}, {
		name: {
			en: "Smash Turn",
			fr: "Tour Fracassant",
			es: "Golpe Giro",
			'es-mx': "Giro Devastador",
			de: "Abdrehender Schmetterer",
			it: "Girata Distruttiva",
			pt: "Virada Esmagadora"
		},

		cost: ["Darkness", "Darkness", "Colorless"],
		damage: 100,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card