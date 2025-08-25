import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Duraludon VMAX",
		fr: "Duralugon VMAX",
		es: "Duraludon VMAX",
		it: "Duraludon VMAX",
		pt: "Duraludon VMAX",
		de: "Duraludon VMAX"
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
			en: "Skyscraper",
			fr: "Gratte-Ciel",
			es: "Rascacielos",
			pt: "Skyscraper",
			it: "Grattacielo",
			de: "Wolkenkratzer"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have Special Energy attached.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire auxquels de l'Énergie spéciale est attachée.",
			es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival que tengan alguna Energía Especial unida a ellos.",
			pt: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have Special Energy attached.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario che hanno Energie speciali assegnate.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners, an die Spezial-Energie angelegt ist, zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			en: "G-Max Pulverization",
			fr: "Pulvérisation G-Max",
			es: "Gigapulverización",
			it: "Gigapolverizzazione",
			pt: "G-Max Pulverization",
			de: "Giga-Pulverisierung"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 220,
		cost: ["Fighting", "Metal", "Metal"]
	}],

	retreat: 3,
	dexId: [884],

	evolveFrom: {
		en: "Duraludon V",
		fr: "Duralugon-V",
		es: "Duraludon V",
		it: "Duraludon-V",
		pt: "Duraludon V",
		de: "Duraludon-V"
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574171,
		tcgplayer: 246751
	}
}

export default card
