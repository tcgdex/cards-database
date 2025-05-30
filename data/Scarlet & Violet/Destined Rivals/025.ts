import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Toedscool",
		fr: "Terracool",
		de: "Tentagra",
		it: "Toedscool",
		es: "Toedscool",
		pt: "Toedscool"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Spore",
			fr: "Spore",
			de: "Pilzspore",
			it: "Spora",
			es: "Espora",
			pt: "Esporos"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card