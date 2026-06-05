import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [200],
	set: Set,

	name: {
		fr: "Feuforêve",
		en: "Misdreavus",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Hypnoblast",
			en: "Hypnoblast",
			es: "Hipnorrayo",
			it: "Ipnobomba",
			pt: "Borrifada Hipnótica",
			de: "Hypnoschuss"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Megumi Higuchi",

	description: {
		en: "This Pokémon startles people in the middle of the night. It gathers fear as its energy.",
	},

	thirdParty: {
		cardmarket: 715562
	}
}

export default card