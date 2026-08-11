import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [65],
	set: Set,

	name: {
		'en-us': "Alakazam",
		'fr-fr': "Alakazam",
		'es-es': "Alakazam",
		'it-it': "Alakazam",
		'pt-br': "Alakazam",
		'de-de': "Simsala"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Kadabra",
		'fr-fr': "Kadabra",
		'es-es': "Kadabra",
		'it-it': "Kadabra",
		'pt-br': "Kadabra",
		'de-de': "Kadabra"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Strange Hacking",
			'fr-fr': "Piratage Étrange",
			'es-es': "Hackeo Extraño",
			'it-it': "Hacking Bizzarro",
			'pt-br': "Hackeamento Estranho",
			'de-de': "Seltsames Hacking"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused. You may move any number of damage counters from your opponent's Pokémon to their other Pokémon in any way you like.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Vous pouvez déplacer autant de marqueurs de dégâts que vous le voulez des Pokémon de votre adversaire vers ses autres Pokémon, comme il vous plaît.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Puedes mover cualquier cantidad de contadores de daño de los Pokémon de tu rival a sus otros Pokémon de la manera que desees.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Puoi spostare un numero qualsiasi di segnalini danno dai Pokémon del tuo avversario ai suoi altri Pokémon nel modo che preferisci.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Você pode mover qualquer número de contadores de dano dos Pokémon do seu oponente para os outros Pokémon dele como desejar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Du kannst beliebig viele Schadensmarken von Pokémon deines Gegners beliebig auf seine anderen Pokémon verschieben."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
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
	regulationMark: "H",

	description: {
		'en-us': "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769256,
				tcgplayer: 550126
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769256,
				tcgplayer: 550126
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 812590,
			}
		},
	],

	illustrator: "Masako Tomii",

}

export default card
