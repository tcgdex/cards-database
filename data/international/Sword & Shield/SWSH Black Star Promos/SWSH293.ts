import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zamazenta V",
		'fr-fr': "Zamazenta V",
		'es-es': "Zamazenta V",
		'it-it': "Zamazenta V",
		'pt-br': "Zamazenta V",
		'de-de': "Zamazenta V"
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
			'fr-fr': "Égide Inflexible",
			'es-es': "Escudo Recio",
			'it-it': "Scudo Saldo",
			'pt-br': "Escudo Destemido",
			'de-de': "Wackerer Schild"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon VMAX.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire.",
			'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon VMAX de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX del tuo avversario.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon VMAX do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Assault Tackle",
			'fr-fr': "Tacle Assaillant",
			'es-es': "Placaje Asalto",
			'it-it': "Azione d'Assalto",
			'pt-br': "Investida Ofensiva",
			'de-de': "Überfalltackle"
		},

		effect: {
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "D",
	suffix: "V"
}

export default card
