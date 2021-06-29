import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Sirfetch’d",
		fr: "Palarticho de Galar",
		es: "Sirfetch’d de Galar",
		it: "Sirfetch’d di Galar",
		pt: "Sirfetch’d de Galar",
		de: "Galar-Lauchzelot"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Farfetch'd",
		fr: "Canarticho de Galar"
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
				en: "This Pokémon can’t use Meteor Assault again until it leaves the Active Spot.",
				fr: "Ce Pokémon ne peut pas réutiliser Joute Astrale tant qu’il ne quitte pas le Poste Actif.",
				es: "Este Pokémon no puede usar Asalto Estelar de nuevo hasta que deje el Puesto Activo.",
				it: "Questo Pokémon non può più usare Sfolgorassalto finché non lascia la posizione attiva.",
				pt: "Este Pokémon não poderá usar Ofensiva Meteórica novamente até sair do Campo Ativo.",
				de: "Dieses Pokémon kann Sternensturm erst wieder einsetzen, wenn es die Aktive Position verlässt."
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
	hp: 130,
	types: ["Fighting"],
	regulationMark: "D"
}

export default card
