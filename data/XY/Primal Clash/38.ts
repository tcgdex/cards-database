import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Wailord EX",
		fr: "Wailord EX",
		es: "Wailord EX",
		it: "Wailord EX",
		pt: "Wailord EX",
		de: "Wailord EX"
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
				en: "Water Veil",
				fr: "Ignifu-Voile",
				es: "Velo Agua",
				it: "Idrovelo",
				pt: "Véu de Água",
				de: "Aquahülle"
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.",
				fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, retirez tous les États Spéciaux de ce Pokémon.",
				es: "Cada que vez que unas 1 carta de Energía de tu mano a este Pokémon, elimina todas sus Condiciones Especiales.",
				it: "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano, rimuovi tutte le condizioni speciali che lo influenzano.",
				pt: "Sempre que você ligar um card de Energia da sua mão a este Pokémon, remova todas as Condições Especiais dele.",
				de: "Jedes Mal, wenn du 1 Energiekarte von deiner Hand an dieses Pokémon anlegst, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
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
				en: "High Breaching",
				fr: "Saut Spectaculaire",
				es: "Salto Emergente",
				it: "Altabreccia",
				pt: "Ruptura Elevada",
				de: "Hoher Durchbruch"
			},
			effect: {
				en: "This Pokémon is now Asleep.",
				fr: "Ce Pokémon est maintenant Endormi.",
				es: "Este Pokémon pasa a estar Dormido.",
				it: "Questo Pokémon viene addormentato.",
				pt: "Este Pokémon agora está Adormecido.",
				de: "Dieses Pokémon schläft jetzt."
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
		cardmarket: 273569
	}
}

export default card
