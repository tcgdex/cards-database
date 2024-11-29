import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Spheal",
		fr: "Obalie",
		es: "Spheal",
		it: "Spheal",
		pt: "Spheal",
		de: "Seemops"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
			es: "Nieve Polvo",
			it: "Polneve",
			pt: "Neve em Pó",
			de: "Pulverschnee"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
