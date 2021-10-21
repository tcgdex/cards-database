import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Dragapult VMAX",
		fr: "Lanssorien VMAX",
		es: "Dragapult VMAX",
		it: "Dragapult VMAX",
		pt: "Dragapult VMAX",
		de: "Katapuldra VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dragapult V",
		fr: "Lanssorien-V",
		es: "Dragapult V",
		it: "Dragapult-V",
		pt: "Dragapult V",
		de: "Katapuldra-V"
	},

	attacks: [{
		name: {
			en: "Shred",
			fr: "Déchiquetage",
			es: "Hacer Trizas",
			it: "Tritatutto",
			pt: "Triturar",
			de: "Zerfetzer"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 60,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Max Phantom",
			fr: "Fantômax",
			es: "Maxifantasma",
			it: "Dynaspettro",
			pt: "Fantasma Max",
			de: "Dyna-Phantom"
		},

		effect: {
			en: "Put 5 damage counters on your opponent's Benched Pokémon in any way you like.",
			fr: "Placez 5 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			es: "Pon 5 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			it: "Metti cinque segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			pt: "Coloque 5 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			de: "Lege 5 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

}

export default card
