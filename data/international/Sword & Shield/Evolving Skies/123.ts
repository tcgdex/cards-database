import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Duraludon VMAX",
		'fr-fr': "Duralugon VMAX",
		'es-es': "Duraludon VMAX",
		'it-it': "Duraludon VMAX",
		'pt-br': "Duraludon VMAX",
		'de-de': "Duraludon VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "VMAX",
	illustrator: "PLANETA Mochizuki",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Skyscraper",
			'fr-fr': "Gratte-Ciel",
			'es-es': "Rascacielos",
			'pt-br': "Skyscraper",
			'it-it': "Grattacielo",
			'de-de': "Wolkenkratzer"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have Special Energy attached.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire auxquels de l'Énergie spéciale est attachée.",
			'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival que tengan alguna Energía Especial unida a ellos.",
			'pt-br': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have Special Energy attached.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario che hanno Energie speciali assegnate.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners, an die Spezial-Energie angelegt ist, zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			'en-us': "G-Max Pulverization",
			'fr-fr': "Pulvérisation G-Max",
			'es-es': "Gigapulverización",
			'it-it': "Gigapolverizzazione",
			'pt-br': "G-Max Pulverization",
			'de-de': "Giga-Pulverisierung"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 220,
		cost: ["Fighting", "Metal", "Metal"]
	}],

	retreat: 3,
	dexId: [884],

	evolveFrom: {
		'en-us': "Duraludon V",
		'fr-fr': "Duralugon-V",
		'es-es': "Duraludon V",
		'it-it': "Duraludon-V",
		'pt-br': "Duraludon V",
		'de-de': "Duraludon-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574171,
				tcgplayer: 246751
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 680135
			}
		},
	],
}

export default card
