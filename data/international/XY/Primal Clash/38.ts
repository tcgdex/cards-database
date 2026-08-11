import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Wailord EX",
		'fr-fr': "Wailord EX",
		'es-es': "Wailord EX",
		'it-it': "Wailord EX",
		'pt-br': "Wailord EX",
		'de-de': "Wailord EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 250,

	types: [
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Water Veil",
				'fr-fr': "Ignifu-Voile",
				'es-es': "Velo Agua",
				'it-it': "Idrovelo",
				'pt-br': "Véu de Água",
				'de-de': "Aquahülle"
			},
			effect: {
				'en-us': "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.",
				'fr-fr': "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, retirez tous les États Spéciaux de ce Pokémon.",
				'es-es': "Cada que vez que unas 1 carta de Energía de tu mano a este Pokémon, elimina todas sus Condiciones Especiales.",
				'it-it': "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano, rimuovi tutte le condizioni speciali che lo influenzano.",
				'pt-br': "Sempre que você ligar um card de Energia da sua mão a este Pokémon, remova todas as Condições Especiais dele.",
				'de-de': "Jedes Mal, wenn du 1 Energiekarte von deiner Hand an dieses Pokémon anlegst, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "High Breaching",
				'fr-fr': "Saut Spectaculaire",
				'es-es': "Salto Emergente",
				'it-it': "Altabreccia",
				'pt-br': "Ruptura Elevada",
				'de-de': "Hoher Durchbruch"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep.",
				'fr-fr': "Ce Pokémon est maintenant Endormi.",
				'es-es': "Este Pokémon pasa a estar Dormido.",
				'it-it': "Questo Pokémon viene addormentato.",
				'pt-br': "Este Pokémon agora está Adormecido.",
				'de-de': "Dieses Pokémon schläft jetzt."
			},
			damage: 120,

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
		cardmarket: 273569,
		tcgplayer: 95930
	}
}

export default card
