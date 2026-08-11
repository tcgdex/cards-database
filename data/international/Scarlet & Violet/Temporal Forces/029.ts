import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'es-es': "Magcargo",
		'it-it': "Magcargo",
		'pt-br': "Magcargo",
		'de-de': "Magcargo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lava Zone",
			'fr-fr': "Zone de Lave",
			'es-es': "Zona de Lava",
			'it-it': "Area Lavica",
			'pt-br': "Zona de Lava",
			'de-de': "Lavazone"
		},

		effect: {
			'en-us': "Whenever your opponent's Active Pokémon moves to the Bench during their turn, their new Active Pokémon is now Burned.",
			'fr-fr': "À chaque fois que le Pokémon Actif de votre adversaire se déplace vers le Banc pendant son tour, son nouveau Pokémon Actif est maintenant Brûlé.",
			'es-es': "Cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, su nuevo Pokémon Activo pasa a estar Quemado.",
			'it-it': "Ogni volta che il Pokémon attivo del tuo avversario si sposta in panchina durante il suo turno, il suo nuovo Pokémon attivo viene bruciato.",
			'pt-br': "Sempre que o Pokémon Ativo do seu oponente for movido para o Banco durante o turno dele, o novo Pokémon Ativo dele agora estará Queimado.",
			'de-de': "Jedes Mal, wenn das Aktive Pokémon deines Gegners während seines Zuges auf die Bank wechselt, ist sein neues Aktives Pokémon jetzt verbrannt."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "Its brittle shell occasionally spouts intense flames that circulate throughout its body.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760659,
				tcgplayer: 542773
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760659,
				tcgplayer: 542773
			}
		},
	],

	illustrator: "Mitsuhiro Arita",

}

export default card
