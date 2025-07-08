import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		de: "Bojelin",
		it: "Floatzel",
		es: "Floatzel",
		pt: "Floatzel",
		'es-mx': "Floatzel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Whirlpool",
			fr: "Siphon",
			de: "Whirlpool",
			it: "Mulinello",
			es: "Torbellino",
			pt: "Redemoinho",
			'es-mx': "Remolino"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Aqua Slash",
			fr: "Aqua Slash",
			de: "Aquaschlag",
			it: "Idrosquarcio",
			es: "Cuchillada Acuática",
			pt: "Aqua Corte",
			'es-mx': "Cuchillada Acuática"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
