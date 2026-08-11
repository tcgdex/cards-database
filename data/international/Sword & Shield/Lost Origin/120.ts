import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
		'es-es': "Darkrai",
		'it-it': "Darkrai",
		'pt-br': "Darkrai",
		'de-de': "Darkrai"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Nightmare",
			'fr-fr': "Cauchemar",
			'es-es': "Pesadilla",
			'it-it': "Incubo",
			'pt-br': "Pesadelo",
			'de-de': "Nachtmahr"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Pitch-Black Blade",
			'fr-fr': "Lame Fuligineuse",
			'es-es': "Tajo Oscuridad",
			'it-it': "Lama Buiopesto",
			'pt-br': "Lâmina do Breu",
			'de-de': "Pechschwarze Klinge"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674133,
				tcgplayer: 284025
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674133,
				tcgplayer: 284025
			}
		},
	],
}

export default card
