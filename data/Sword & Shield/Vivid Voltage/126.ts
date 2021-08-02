import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Aegislash V",
		fr: "Exagide V",
		es: "Aegislash V",
		it: "Aegislash V",
		pt: "Aegislash V",
		de: "Durengard V"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Sonic Edge",
				fr: "Tranchant Sonique",
				es: "Tajo Sónico",
				it: "Muro del Suono",
				pt: "Gume Sônico",
				de: "Schallkante"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
