import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

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

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
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
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Eerie Glow",
			'fr-fr': "Lueur Sinistre",
			'es-es': "Resplandor Sobrecogedor",
			'it-it': "Lucemistero",
			'pt-br': "Brilho Misterioso",
			'de-de': "Gruselglühen"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned and Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769201,
				tcgplayer: 550071
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769201,
				tcgplayer: 550071
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

}

export default card