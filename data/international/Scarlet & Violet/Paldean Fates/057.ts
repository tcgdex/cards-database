import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'es-es': "Gengar",
		'it-it': "Gengar",
		'pt-br': "Gengar",
		'de-de': "Gengar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Night Gate",
			'fr-fr': "Portail Nocturne",
			'es-es': "Portal Nocturno",
			'it-it': "Portale Notturno",
			'pt-br': "Portão Noturno",
			'de-de': "Nachtpforte"
		},

		effect: {
			'en-us': "Once during your turn, you may switch your Active Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez échanger votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
			'es-es': "Una vez durante tu turno, puedes cambiar tu Pokémon Activo por uno de tus Pokémon en Banca.",
			'it-it': "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo con uno della tua panchina.",
			'pt-br': "Uma vez durante o seu turno, você poderá trocar o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
			'de-de': "Einmal während deines Zuges kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		}
	}],

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

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751595,
				tcgplayer: 534419,
				cardtrader: 274241
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751595,
				tcgplayer: 534419,
				cardtrader: 274241
			}
		},
	],

	illustrator: "Nelnal",

	description: {
		'en-us': "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
	},

}

export default card
