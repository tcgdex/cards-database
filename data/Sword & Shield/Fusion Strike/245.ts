import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		en: "Celebi V",
		fr: "Celebi V",
		es: "Celebi V",
		it: "Celebi V",
		pt: "Celebi V",
		de: "Celebi V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leaflet Dance",
			fr: "Foliole Dansante",
			de: "Blättchenreigen",
			es: "Danza de los Folíolos",
			pt: "Dança das Folhinhas",
			it: "Danza di Foglioline"
		},

		effect: {
			en: "Attach any number of {G} Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Attachez le nombre de cartes Énergie {G} voulues de votre main à vos Pokémon comme il vous plaît.",
			de: "Lege beliebig viele {G}-Energiekarten aus deiner Hand beliebig an deine Pokémon an.",
			es: "Une cualquier cantidad de cartas de Energía {G} de tu mano a tus Pokémon de la manera que desees.",
			pt: "Ligue qualquer número de cartas de Energia {G} da sua mão aos seus Pokémon como desejar.",
			it: "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia {G} dalla tua mano nel modo che preferisci."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Slash Back",
			fr: "Retour de Frappe",
			de: "Rückschnitt",
			es: "Tajo Cambiante",
			pt: "Contra-arranhar",
			it: "Sferzata Inversa"
		},

		damage: 60,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Scambia questo Pokémon con uno della tua panchina."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582981
	}
}

export default card