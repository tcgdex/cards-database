import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'es-mx': "Raichu",
		'de-de': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu"
	},

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'es-mx': "Pikachu",
		'de-de': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
	},

	illustrator: "Iori Suzuki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [26],
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Quick Blow",
			'fr-fr': "Coup d'Poing Éclair",
			'es-es': "Golpe Rápido",
			'es-mx': "Golpe Rápido",
			'de-de': "Schnellschlag",
			'it-it': "Colpo Veloce",
			'pt-br': "Golpe Rápido"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 50 pontos de dano a mais."
		},

		damage: "20+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

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
			'en-us': "Discard a {L} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {L} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {L} de este Pokémon.",
			'es-mx': "Descarta 1 Energía {L} de este Pokémon.",
			'de-de': "Lege 1 {L}-Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia {L} da questo Pokémon.",
			'pt-br': "Descarte uma Energia {L} deste Pokémon."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "When its electricity builds, its muscles are stimulated, and it becomes more aggressive than usual.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869667,
			tcgplayer: 675868
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870228,
			tcgplayer: 676898
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870227,
			tcgplayer: 677038
		}
	},
],
}

export default card
