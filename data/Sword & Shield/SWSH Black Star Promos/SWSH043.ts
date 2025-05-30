import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Sirfetch'd V",
		fr: "Palarticho de Galar V",
		es: "Sirfetch'd de Galar V",
		it: "Sirfetch'd di Galar V",
		pt: "Sirfetch'd de Galar V",
		de: "Galar-Lauchzelot V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Resolute Spear",
			fr: "Lance Inébranlable",
			es: "Lanza Resuelta",
			it: "Lancia Risoluta",
			pt: "Lança Resoluta",
			de: "Zielsicherer Speer"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of {F} Energy from your other Pokémon to it.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez déplacer autant d'Énergies {F} que vous le voulez de vos autres Pokémon vers celui-ci.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes mover cualquier cantidad de Energías {F} de tus otros Pokémon a este Pokémon.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi spostare un numero qualsiasi di Energie {F} dai tuoi altri Pokémon su questo Pokémon.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá mover qualquer quantidade de Energia {F} dos seus outros Pokémon para este Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du beliebig viele {F}-Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			en: "Meteor Smash",
			fr: "Impact Astral",
			es: "Golpe Meteoro",
			it: "Meteorschiacciata",
			pt: "Impacto Meteórico",
			de: "Meteoreinschlag"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [865],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
