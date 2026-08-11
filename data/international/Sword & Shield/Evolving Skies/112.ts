import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'es-es': "Dialga",
		'it-it': "Dialga",
		'pt-br': "Dialga",
		'de-de': "Dialga"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Ryuta Fuse",

	attacks: [{
		name: {
			'en-us': "Chrono Wind",
			'fr-fr': "Vent Temporel",
			'es-es': "Retroceso Cronológico",
			'it-it': "Cronolancetta",
			'pt-br': "Chrono Wind",
			'de-de': "Zeitsturm"
		},

		effect: {
			'en-us': "If the Defending Pokémon is a Pokémon V, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon-V, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon V, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon-V.",
			'pt-br': "If the Defending Pokémon is a Pokémon V, it can't attack during your opponent's next turn.",
			'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-V ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Heavy Impact",
			'de-de': "Schwerer Einschlag"
		},

		damage: 210,
		cost: ["Psychic", "Metal", "Metal", "Colorless"]
	}],

	retreat: 2,
	dexId: [483],

	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574160,
				tcgplayer: 246910
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574160,
				tcgplayer: 246910
			}
		},
	],
}

export default card
