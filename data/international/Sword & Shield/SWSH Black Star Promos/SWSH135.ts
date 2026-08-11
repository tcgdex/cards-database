import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Zacian",
		'fr-fr': "Zacian",
		'de-de': "Zacian",
		'es-es': "Zacian",
		'pt-br': "Zacian",
		'it-it': "Zacian"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	stage: "BREAK",

	abilities: [{
		type: "Poke-BODY",

		name: {
			'en-us': "Bladed Armament",
			'fr-fr': "Artillerie Lames"
		},

		effect: {
			'en-us': "Damage from this Pokémon's attacks isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts des attaques de ce Pokémon ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Brave Blade",
			'fr-fr': "Lame Vaillante",
			'de-de': "Couragierte Klinge",
			'es-es': "Cuchilla Osada",
			'pt-br': "Lâmina Valente",
			'it-it': "Baldalama"
		},

		damage: 240,

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 160,
	types: ["Metal"],
	retreat: 2,

	thirdParty: {
		cardmarket: 491179
	}
}

export default card
