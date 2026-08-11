import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [178],
	set: Set,

	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'es-es': "Xatu",
		'it-it': "Xatu",
		'pt-br': "Xatu",
		'de-de': "Xatu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Clairvoyant Sense",
			'fr-fr': "Don de Clairvoyance",
			'es-es': "Sentido Clarividente",
			'it-it': "Senso Chiaroveggente",
			'pt-br': "Sentido Clarividente",
			'de-de': "Hellsichtiger Sinn"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic {P} Energy card from your hand to 1 of your Benched Pokémon. If you attached Energy to a Pokémon in this way, draw 2 cards.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {P} de base de votre main à l'un de vos Pokémon de Banc. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, piochez 2 cartes.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía {P} Básica de tu mano a uno de tus Pokémon en Banca. Si has unido Energía a un Pokémon de esta manera, roba 2 cartas.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia base {P} dalla tua mano. Se hai assegnato dell'Energia a un Pokémon in questo modo, pesca due carte.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {P} Básica da sua mão a 1 dos seus Pokémon no Banco. Se você ligou Energia a um Pokémon desta forma, compre 2 cartas.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-{P}-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, ziehe 2 Karten."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751559,
				tcgplayer: 534171,
				cardtrader: 274210
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751559,
				tcgplayer: 534171,
				cardtrader: 274210
			}
		},
	],

	illustrator: "DOM",

	description: {
		'en-us': "This odd Pokémon can see both the past and the future. It eyes the sun's movement all day.",
	},

}

export default card
