import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "But First, Food",
			'fr-fr': "Manger d'Abord",
			'es-es': "Ante Todo, Comer",
			'it-it': "Cibo Prima di Tutto",
			'pt-br': "Primeiro, a Refeição",
			'de-de': "Aber erstmal essen"
		},

		effect: {
			'en-us': "Attach an Energy card from your hand to this Pokémon. If you do, heal 60 damage from this Pokémon.",
			'fr-fr': "Attachez une carte Énergie de votre main à ce Pokémon. Dans ce cas, soignez 60 dégâts de ce Pokémon.",
			'es-es': "Une 1 carta de Energía de tu mano a este Pokémon. Si lo haces, cura 60 puntos de daño a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia dalla tua mano. Se lo fai, cura questo Pokémon da 60 danni.",
			'pt-br': "Ligue uma carta de Energia da sua mão a este Pokémon. Se fizer isto, cure 60 pontos de dano deste Pokémon.",
			'de-de': "Lege 1 Energiekarte aus deiner Hand an dieses Pokémon an. Wenn du das machst, heile 60 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "Its stomach's digestive juices can dissolve any kind of poison. Eating things off the ground doesn't bother it at all.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769310,
				tcgplayer: 550180
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769310,
				tcgplayer: 550180
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card