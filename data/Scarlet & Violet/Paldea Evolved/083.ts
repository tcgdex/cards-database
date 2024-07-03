import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [39],
	set: Set,

	name: {
		fr: "Rondoudou",
		en: "Jigglypuff",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Berceuse",
			en: "Sing",
			es: "Canto",
			it: "Canto",
			pt: "Canção",
			de: "Gesang"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Gifle",
			en: "Slap",
			es: "Bofetón",
			it: "Sberla",
			pt: "Tapa",
			de: "Hieb"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card