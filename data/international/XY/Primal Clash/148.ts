import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Kyogre EX",
		'fr-fr': "Kyogre EX",
		'es-es': "Kyogre EX",
		'it-it': "Kyogre EX",
		'pt-br': "Kyogre EX",
		'de-de': "Kyogre EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d'Água",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giant Whirlpool",
				'fr-fr': "Siphon Colossal",
				'es-es': "Torbellino Gigante",
				'it-it': "Super Mulinello",
				'pt-br': "Redemoinho Gigante",
				'de-de': "Gigantischer Strudel"
			},
			effect: {
				'en-us': "Return 2 Water Energy attached to this Pokémon to your hand.",
				'fr-fr': "Reprenez 2 Énergies Water attachées à ce Pokémon dans votre main.",
				'es-es': "Devuelve 2 Energías Water unidas a este Pokémon a tu mano.",
				'it-it': "Riprendi in mano due Energie Water assegnate a questo Pokémon.",
				'pt-br': "Devolva 2 Energias Water ligadas a este Pokémon para sua mão.",
				'de-de': "Nimm 2 an dieses Pokémon angelegte Water-Energien zurück auf deine Hand."
			},
			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	stage: "Basic",

	thirdParty: {
		cardmarket: 273584,
		tcgplayer: 96046
	}
}

export default card
