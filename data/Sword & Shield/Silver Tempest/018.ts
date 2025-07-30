import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hypnotic Gaze",
			fr: "Regard Hypnotique",
			es: "Mirada Hipnótica",
			it: "Ipnosguardo",
			pt: "Olhar Hipnótico",
			de: "Hypnotischer Blick"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Scorching Breath",
			fr: "Souffle Brûlant",
			es: "Aliento Ígneo",
			it: "Soffio Ustionante",
			pt: "Hálito Ardente",
			de: "Sengender Atem"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682059
	}
}

export default card