import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta V",
		fr: "Zamazenta V",
		es: "Zamazenta V",
		it: "Zamazenta V",
		pt: "Zamazenta V",
		de: "Zamazenta V"
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
			fr: "Égide Inflexible",
			es: "Escudo Recio",
			it: "Scudo Saldo",
			pt: "Dauntless Shield",
			de: "Wackerer Schild"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire.",
			es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon VMAX de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX del tuo avversario.",
			pt: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			en: "Assault Tackle",
			fr: "Tacle Assaillant",
			es: "Placaje Asalto",
			it: "Azione d’Assalto",
			pt: "Assault Tackle",
			de: "Überfalltackle"
		},

		effect: {
			en: "Discard a Special Energy from your opponent’s Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			it: "Scarta un’Energia speciale dal Pokémon attivo del tuo avversario.",
			pt: "Discard a Special Energy from your opponent’s Active Pokémon.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
	suffix: "V",
	dexId: [889],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card