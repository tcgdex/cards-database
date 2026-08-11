import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [127],
	set: Set,

	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'es-es': "Pinsir",
		'it-it': "Pinsir",
		'pt-br': "Pinsir",
		'de-de': "Pinsir"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Slow Crunch",
			'fr-fr': "Mâchouille Lente",
			'es-es': "Trituración Lenta",
			'it-it': "Sgranocchio Lento",
			'pt-br': "Esmagada Lenta",
			'de-de': "Langsamer Knirscher"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			'es-es': "Descarta todas las Energías de este Pokémon. Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
			'it-it': "Scarta tutte le Energie da questo Pokémon. Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
			'pt-br': "Descarte todas as Energias deste Pokémon. No final do próximo turno do seu oponente, o Pokémon Defensor será Nocauteado.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Superpowered Horns",
			'fr-fr': "Cornes Surpuissantes",
			'es-es': "Cuernos Superpoderosos",
			'it-it': "Corna Superpotenziate",
			'pt-br': "Chifres Superpoderosos",
			'de-de': "Superstarke Hörner"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769342,
				tcgplayer: 550212
			}
		},
	],

	illustrator: "Yukihiro Tada",

}

export default card