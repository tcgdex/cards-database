import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		'en-us': "Luxray ex",
		'fr-fr': "Luxray-ex",
		'es-es': "Luxray ex",
		'it-it': "Luxray-ex",
		'pt-br': "Luxray ex",
		'de-de': "Luxtra-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Piercing Gaze",
			'fr-fr': "Regard Perçant",
			'es-es': "Mirada Penetrante",
			'it-it': "Sguardo Penetrante",
			'pt-br': "Olhar Perfurante",
			'de-de': "Stechender Blick"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. Discard a card you find there.",
			'fr-fr': "Votre adversaire montre sa main. Défaussez une carte que vous y trouvez.",
			'es-es': "Tu rival enseña las cartas de su mano. Descarta 1 carta que encuentres entre ellas.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Scartane una.",
			'pt-br': "Seu oponente revela a mão dele. Descarte uma carta que encontrar lá.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege 1 Karte, die du dort findest, auf seinen Ablagestapel."
		},

		damage: 120
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Volt Strike",
			'fr-fr': "Frappe Volt",
			'es-es': "Golpe Voltio",
			'it-it': "Colpovolt",
			'pt-br': "Golpe Voltaico",
			'de-de': "Volttreffer"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769242,
				tcgplayer: 550112
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Yamashita",

}

export default card