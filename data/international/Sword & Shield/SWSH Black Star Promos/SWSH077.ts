import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zamazenta V",
		'pt-br': "Zamazenta V",
		'de-de': "Zamazenta V",
		'fr-fr': "Zamazenta V",
		'es-es': "Zamazenta V",
		'it-it': "Zamazenta V"
	},

	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dauntless Shield",
			'pt-br': "Escudo Destemido",
			'de-de': "Wackerer Schild",
			'fr-fr': "Égide Inflexible",
			'es-es': "Escudo Recio",
			'it-it': "Scudo Saldo"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon VMAX do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX deines Gegners zugefügt wird.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire.",
			'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon VMAX de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX del tuo avversario."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Assault Tackle",
			'pt-br': "Investida Ofensiva",
			'de-de': "Überfalltackle",
			'fr-fr': "Tacle Assaillant",
			'es-es': "Placaje Asalto",
			'it-it': "Azione d'Assalto"
		},

		effect: {
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
			'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario."
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [889],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 465534
	}
}

export default card
