import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Sirfetch'd",
		fr: "Palarticho de Galar",
		es: "Sirfetch'd de Galar",
		it: "Sirfetch'd di Galar",
		pt: "Sirfetch'd de Galar",
		de: "Galar-Lauchzelot"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [865],
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Galarian Farfetch'd",
		fr: "Canarticho de Galar",
		es: "Farfetch'd de Galar",
		it: "Farfetch'd di Galar",
		pt: "Farfetch'd de Galar",
		de: "Galar-Porenta"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
				es: "Perforar",
				it: "Perforare",
				pt: "Perfurar",
				de: "Durchbohren"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Meteor Assault",
				fr: "Joute Astrale",
				es: "Asalto Estelar",
				it: "Sfolgorassalto",
				pt: "Ofensiva Meteórica",
				de: "Sternensturm"
			},
			effect: {
				en: "This Pokémon can't use Meteor Assault again until it leaves the Active Spot.",
				fr: "Ce Pokémon ne peut pas réutiliser Joute Astrale tant qu'il ne quitte pas le Poste Actif.",
				es: "Este Pokémon no puede usar Asalto Estelar de nuevo hasta que deje el Puesto Activo.",
				it: "Questo Pokémon non può più usare Sfolgorassalto finché non lascia la posizione attiva.",
				pt: "Este Pokémon não poderá usar Ofensiva Meteórica novamente até sair do Campo Ativo.",
				de: "Dieses Pokémon kann Sternensturm nicht wieder einsetzen, bis es die Aktive Position verlässt."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Only Farfetch'd that have survived many battles can attain this evolution. When this Pokémon's leek withers, it will retire from combat."
	}
}

export default card
