import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hypnotic Gaze",
			'fr-fr': "Regard Hypnotique",
			'es-es': "Mirada Hipnótica",
			'it-it': "Ipnosguardo",
			'pt-br': "Olhar Hipnótico",
			'de-de': "Hypnotischer Blick"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Scorching Breath",
			'fr-fr': "Souffle Brûlant",
			'es-es': "Aliento Ígneo",
			'it-it': "Soffio Ustionante",
			'pt-br': "Hálito Ardente",
			'de-de': "Sengender Atem"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682059,
				tcgplayer: 451647
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682059,
				tcgplayer: 451647
			}
		},
	],
}

export default card
