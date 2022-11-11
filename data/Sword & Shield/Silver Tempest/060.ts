import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy",
			es: "Psicopuño",
			it: "Psicopugno",
			pt: "Soco Psíquico",
			de: "Psyhieb"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Hypnotic Ray",
			fr: "Onde Hypnotique",
			es: "Rayo Hipnótico",
			it: "Ipnoraggio",
			pt: "Raio Hipnótico",
			de: "Hypnotischer Strahl"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card