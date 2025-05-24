import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "VMAX",

	name: {
		en: "Dragapult VMAX",
		fr: "Lanssorien VMAX",
		de: "Katapuldra VMAX",
		es: "Dragapult VMAX",
		pt: "Dragapult VMAX",
		it: "Dragapult VMAX"
	},

	rarity: "None",
	dexId: [887],
	hp: 320,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dragapult V",
		fr: "Lanssorien-V",
		de: "Katapuldra-V",
		es: "Dragapult V",
		pt: "Dragapult V",
		it: "Dragapult-V"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Shred",
			fr: "Déchiquetage",
			de: "Zerfetzer",
			es: "Hacer Trizas",
			pt: "Triturar",
			it: "Tritatutto"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario."
		},

		damage: 60
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Max Phantom",
			fr: "Fantômax",
			de: "Dyna-Phantom",
			es: "Maxifantasma",
			pt: "Fantasma Max",
			it: "Dynaspettro"
		},

		effect: {
			en: "Put 5 damage counters on your opponent's Benched Pokémon in any way you like.",
			fr: "Placez 5 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			de: "Lege 5 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners.",
			es: "Pon 5 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			pt: "Coloque 5 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			it: "Metti cinque segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci."
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

	regulationMark: "D"
}

export default card
