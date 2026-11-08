import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'de-de': "Arkani",
		'it-it': "Arcanine",
		'es-es': "Arcanine",
		'pt-br': "Arcanine",
		'es-mx': "Arcanine"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'de-de': "Fukano",
		'it-it': "Growlithe",
		'es-es': "Growlithe",
		'pt-br': "Growlithe",
		'es-mx': "Growlithe"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'de-de': "Flackern",
			'it-it': "Fiammata",
			'es-es': "Llama",
			'pt-br': "Chama",
			'es-mx': "Llama"
		},

		damage: 50
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Punishing Fang",
			'fr-fr': "Croc Punitif",
			'de-de': "Strafende Fänge",
			'it-it': "Zanna Punitiva",
			'es-es': "Colmillo Castigador",
			'pt-br': "Caninos Punitivos",
			'es-mx': "Colmillo Castigador"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {D} Pokémon, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {D}, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein {D}-Pokémon ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon {D}, questo attacco infligge 100 danni in più.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {D}, este ataque hace 100 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {D}, este ataque causará 100 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon {D}, este ataque hace 100 puntos de daño más."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825901,
				tcgplayer: 632851
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825901,
				tcgplayer: 632851
			}
		},
	],
}

export default card
