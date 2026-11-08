import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [405],

	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'es-mx': "Luxray",
		'de-de': "Luxtra",
		'it-it': "Luxray",
		'pt-br': "Luxray"
	},

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'es-mx': "Luxio",
		'de-de': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
	},

	illustrator: "Taiga Kasai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Incessant Onslaught",
			'fr-fr': "Assauts Continuels",
			'es-es': "Embestida Incesante",
			'es-mx': "Asalto Incesante",
			'de-de': "Unablässiger Ansturm",
			'it-it': "Offensiva Continua",
			'pt-br': "Sova Sem Fim"
		},

		effect: {
			'en-us': "This attack does 70 damage for each Prize card you have taken.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque carte Récompense que vous avez récupérée.",
			'es-es': "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas cogido.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas tomado.",
			'de-de': "Diese Attacke fügt für jede von dir genommene Preiskarte 70 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 70 danni per ogni carta Premio che hai preso.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada carta de Prêmio que você pegou."
		},

		damage: "70×"
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Strong Volt",
			'fr-fr': "Décharge Foudroyante",
			'es-es': "Descarga Fulminante",
			'es-mx': "Voltio Fulminante",
			'de-de': "Voltkraft",
			'it-it': "Supervolt",
			'pt-br': "Tensão Intensa"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684411,
				cardmarket: 877441
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684411,
				cardmarket: 877441
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	],

}

export default card
