import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta V",
		pt: "Zamazenta V",
		de: "Zamazenta V",
		fr: "Zamazenta V",
		es: "Zamazenta V",
		it: "Zamazenta V"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Dauntless Shield",
			pt: "Escudo Destemido",
			de: "Wackerer Schild",
			fr: "Égide Inflexible",
			es: "Escudo Recio",
			it: "Scudo Saldo"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon VMAX do seu oponente.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX deines Gegners zugefügt wird.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire.",
			es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon VMAX de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX del tuo avversario."
		}
	}],

	attacks: [{
		name: {
			en: "Assault Tackle",
			pt: "Investida Ofensiva",
			de: "Überfalltackle",
			fr: "Tacle Assaillant",
			es: "Placaje Asalto",
			it: "Azione d'Assalto"
		},

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario."
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
