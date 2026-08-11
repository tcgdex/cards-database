import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'es-es': "Honchkrow",
		'it-it': "Honchkrow",
		'pt-br': "Honchkrow",
		'de-de': "Kramshef"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		430,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'es-es': "Hipnorrayo",
				'it-it': "Ipnobomba",
				'pt-br': "Borrifada Hipnótica",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Nightmare Mambo",
				'fr-fr': "Valse Hantée",
				'es-es': "Mambo Pesadilla",
				'it-it': "Incubo Mambo",
				'pt-br': "Mambo do Pesadelo",
				'de-de': "Albtraum-Mambo"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is Asleep, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Dormido, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è addormentato, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Adormecido, esse ataque causará 60 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners schläft, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If one utters a deep cry, many Murkrow gather quickly. For this, it is called \"Summoner of Night.\"",
	},

	thirdParty: {
		cardmarket: 281858,
		tcgplayer: 94510
	}
}

export default card
