import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [865],
	set: Set,

	name: {
		fr: "Palarticho de Galar",
		en: "Galarian Sirfetch'd",
		es: "Sirfetch'd de Galar",
		it: "Sirfetch'd di Galar",
		pt: "Sirfetch'd de Galar",
		de: "Galar-Lauchzelot"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Canarticho de Galar",
		en: "Galarian Farfetch'd"
	},

	attacks: [{
		name: {
			fr: "Transpercement",
			en: "Pierce",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			fr: "Joute Astrale",
			en: "Meteor Assault",
			es: "Asalto Estelar",
			it: "Sfolgorassalto",
			pt: "Ofensiva Meteórica",
			de: "Sternensturm"
		},

		effect: {
			fr: "Ce Pokémon ne peut pas réutiliser Joute Astrale tant qu'il ne quitte pas le Poste Actif.",
			en: "This Pokémon can't use Meteor Assault again until it leaves the Active Spot.",
			es: "Este Pokémon no puede usar Asalto Estelar de nuevo hasta que deje el Puesto Activo.",
			it: "Questo Pokémon non può più usare Sfolgorassalto finché non lascia la posizione attiva.",
			pt: "Este Pokémon não poderá usar Ofensiva Meteórica novamente até sair do Campo Ativo.",
			de: "Dieses Pokémon kann Sternensturm erst wieder einsetzen, wenn es die Aktive Position verlässt."
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "Only Farfetch'd that have survived many battles can attain this evolution. When this Pokémon's leek withers, it will retire from combat."
	}
}

export default card
