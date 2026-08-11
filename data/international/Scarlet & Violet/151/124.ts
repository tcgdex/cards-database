import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [124],
	set: Set,

	name: {
		'fr-fr': "Lippoutou-ex",
		'en-us': "Jynx ex",
		'es-es': "Jynx ex",
		'it-it': "Jynx-ex",
		'pt-br': "Jynx ex",
		'de-de': "Rossana-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Baiser Coup de Foudre",
			'en-us': "Heart-Stopping Kiss",
			'es-es': "Beso de Infarto",
			'it-it': "Bacio Fatale",
			'pt-br': "Beijo Arrasa Coração",
			'de-de': "Herzzerreißender Kuss"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Endormi, il est mis K.O.",
			'en-us': "If your opponent's Active Pokémon is Asleep, it is Knocked Out.",
			'es-es': "Si el Pokémon Activo de tu rival está Dormido, queda Fuera de Combate.",
			'it-it': "Se il Pokémon attivo del tuo avversario è addormentato, viene messo KO.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Adormecido, ele será Nocauteado.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners schläft, ist es kampfunfähig."
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'fr-fr': "Vent Glace",
			'en-us': "Icy Wind",
			'es-es': "Viento Hielo",
			'it-it': "Ventogelato",
			'pt-br': "Vento Congelante",
			'de-de': "Eissturm"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733719,
				tcgplayer: 516687,
				cardtrader: 261072
			}
		},
	],

	suffix: "ex",
	illustrator: "Ayaka Yoshida",

	
}

export default card
