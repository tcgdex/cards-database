import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Kyogre EX",
		fr: "Kyogre EX",
		es: "Kyogre EX",
		it: "Kyogre EX",
		pt: "Kyogre EX",
		de: "Kyogre EX"
	},

	illustrator: "Ryota Murayama",
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
				en: "Giant Whirlpool",
				fr: "Siphon Colossal",
				es: "Torbellino Gigante",
				it: "Super Mulinello",
				pt: "Redemoinho Gigante",
				de: "Gigantischer Strudel"
			},
			effect: {
				en: "Return 2 Water Energy attached to this Pokémon to your hand.",
				fr: "Reprenez 2 Énergies Water attachées à ce Pokémon dans votre main.",
				es: "Devuelve 2 Energías Water unidas a este Pokémon a tu mano.",
				it: "Riprendi in mano due Energie Water assegnate a questo Pokémon.",
				pt: "Devolva 2 Energias Water ligadas a este Pokémon para sua mão.",
				de: "Nimm 2 an dieses Pokémon angelegte Water-Energien zurück auf deine Hand."
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
		cardmarket: 273585
	}
}

export default card
