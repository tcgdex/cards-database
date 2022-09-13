import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Swanna",
		fr: "Lakmécygne",
		es: "Swanna",
		it: "Swanna",
		pt: "Swanna",
		de: "Swaroness"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
		es: "Ducklett",
		it: "Ducklett",
		pt: "Ducklett",
		de: "Piccolente"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
			es: "Hidropulso",
			it: "Idropulsar",
			pt: "Pulso d'Água",
			de: "Aquawelle"
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
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
			es: "Tajo Aéreo",
			it: "Eterelama",
			pt: "Golpe de Ar",
			de: "Luftschnitt"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card