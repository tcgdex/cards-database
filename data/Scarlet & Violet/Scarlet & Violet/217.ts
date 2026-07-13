import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [950],
	set: Set,

	name: {
		en: "Klawf",
		fr: "Craparoi",
		es: "Klawf",
		it: "Klawf",
		pt: "Klawf",
		de: "Klibbe"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			it: "Presa",
			pt: "Agarramento Compressor",
			de: "Klammer"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Adrenaline Hammer",
			fr: "Marteau Adrénaline",
			es: "Martillo Adrenalina",
			it: "Martello Adrenalinico",
			pt: "Martelo de Adrenalina",
			de: "Adrenalinhammer"
		},

		effect: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
			es: "Este Pokémon pasa a estar Confundido.",
			it: "Questo Pokémon viene confuso.",
			pt: "Este Pokémon agora está Confuso.",
			de: "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
    {
      type: "holo",
      size: "standard"
    }
  ],

	illustrator: "Mina Nakai",

	description: {
		en: "Klawf hangs upside-down from cliffs, waiting for prey. But Klawf can't remain in this position for long because its blood rushes to its head.",
	},

	thirdParty: {
        cardmarket: 702513,
        tcgplayer: 490075
    }
}

export default card