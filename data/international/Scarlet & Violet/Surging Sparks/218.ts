import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [646],
	set: Set,

	name: {
		'en-us': "Black Kyurem ex",
		'fr-fr': "Kyurem Noir-ex",
		'es-es': "Kyurem Negro ex",
		'it-it': "Kyurem Nero-ex",
		'pt-br': "Kyurem Preto ex",
		'de-de': "Schwarzes Kyurem-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Ice Age",
			'fr-fr': "Période Glaciaire",
			'es-es': "Era de Hielo",
			'it-it': "Era Glaciale",
			'pt-br': "Era do Gelo",
			'de-de': "Eiszeitalter"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {N} Pokémon, it is now Paralyzed.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {N}, il est maintenant Paralysé.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {N}, pasa a estar Paralizado.",
			'it-it': "Se il Pokémon attivo del tuo avversario è di tipo {N}, viene paralizzato.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {N}, ele agora estará Paralisado.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein {N}-Pokémon ist, ist es jetzt paralysiert."
		},

		damage: 90
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Black Frost",
			'fr-fr': "Givre Noir",
			'es-es': "Escarcha Negra",
			'it-it': "Nerogelo",
			'pt-br': "Geada Negra",
			'de-de': "Schwarzer Frost"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794591,
				tcgplayer: 589875
			}
		},
	],

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

}

export default card
