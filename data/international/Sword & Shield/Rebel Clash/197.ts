import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [887],
	set: Set,

	name: {
		'en-us': "Dragapult VMAX",
		'fr-fr': "Lanssorien VMAX",
		'es-es': "Dragapult VMAX",
		'it-it': "Dragapult VMAX",
		'pt-br': "Dragapult VMAX",
		'de-de': "Katapuldra VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Dragapult V",
		'fr-fr': "Lanssorien-V",
		'es-es': "Dragapult V",
		'it-it': "Dragapult-V",
		'pt-br': "Dragapult V",
		'de-de': "Katapuldra-V"
	},

	attacks: [{
		name: {
			'en-us': "Shred",
			'fr-fr': "Déchiquetage",
			'es-es': "Hacer Trizas",
			'it-it': "Tritatutto",
			'pt-br': "Triturar",
			'de-de': "Zerfetzer"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 60,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Max Phantom",
			'fr-fr': "Fantômax",
			'es-es': "Maxifantasma",
			'it-it': "Dynaspettro",
			'pt-br': "Fantasma Max",
			'de-de': "Dyna-Phantom"
		},

		effect: {
			'en-us': "Put 5 damage counters on your opponent's Benched Pokémon in any way you like.",
			'fr-fr': "Placez 5 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'es-es': "Pon 5 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'it-it': "Metti cinque segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 5 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'de-de': "Lege 5 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 130,
		cost: ["Psychic", "Psychic"]
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
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 457348,
				tcgplayer: 213181
			}
		},
	],
}

export default card
