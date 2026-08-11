import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [545],
	set: Set,

	name: {
		'en-us': "Scolipede",
		'fr-fr': "Brutapode",
		'es-es': "Scolipede",
		'it-it': "Scolipede",
		'pt-br': "Scolipede",
		'de-de': "Cerapendra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
		'es-es': "Whirlipede",
		'it-it': "Whirlipede",
		'pt-br': "Whirlipede",
		'de-de': "Rollum"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Dastardly Jab",
			'fr-fr': "Coup Ignoble",
			'es-es': "Puya Vil",
			'it-it': "Stoccata Ignobile",
			'pt-br': "Punhalada Indecorosa",
			'de-de': "Schurkischer Stich"
		},

		effect: {
			'en-us': "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
			'fr-fr': "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 10 PV.",
			'es-es': "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS.",
			'it-it': "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
			'pt-br': "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10.",
			'de-de': "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 10 sind."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Sludge Bomb",
			'fr-fr': "Bombe Beurk",
			'es-es': "Bomba Lodo",
			'it-it': "Fangobomba",
			'pt-br': "Bomba de Lodo",
			'de-de': "Matschbombe"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claws' toxic spikes.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769291,
				tcgplayer: 550161
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769291,
				tcgplayer: 550161
			}
		},
	],

	illustrator: "Shiburingaru",

}

export default card