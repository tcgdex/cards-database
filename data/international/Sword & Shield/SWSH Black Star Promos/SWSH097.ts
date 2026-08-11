import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "VMAX",

	name: {
		'en-us': "Dragapult VMAX",
		'fr-fr': "Lanssorien VMAX",
		'de-de': "Katapuldra VMAX",
		'es-es': "Dragapult VMAX",
		'pt-br': "Dragapult VMAX",
		'it-it': "Dragapult VMAX"
	},

	rarity: "Promo",
	dexId: [887],
	hp: 320,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Dragapult V",
		'fr-fr': "Lanssorien-V",
		'de-de': "Katapuldra-V",
		'es-es': "Dragapult V",
		'pt-br': "Dragapult V",
		'it-it': "Dragapult-V"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Shred",
			'fr-fr': "Déchiquetage",
			'de-de': "Zerfetzer",
			'es-es': "Hacer Trizas",
			'pt-br': "Triturar",
			'it-it': "Tritatutto"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario."
		},

		damage: 60
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Max Phantom",
			'fr-fr': "Fantômax",
			'de-de': "Dyna-Phantom",
			'es-es': "Maxifantasma",
			'pt-br': "Fantasma Max",
			'it-it': "Dynaspettro"
		},

		effect: {
			'en-us': "Put 5 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 5 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'de-de': "Lege 5 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners.",
			'es-es': "Pon 5 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'pt-br': "Coloque 5 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'it-it': "Metti cinque segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci."
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 549391
	}
}

export default card
