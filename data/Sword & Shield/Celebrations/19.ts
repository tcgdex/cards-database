import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
	},

	rarity: "Rare",
	category: "Pokemon",
	types: ["Darkness"],
	illustrator: "AKIRA EGAWA",
	hp: 120,
	stage: "Basic",

	attacks: [{
		name: {
			en: "Cry of Destruction",
			fr: "Cri d'Annihilation",
			es: "Alaridos de Destrucción",
			it: "Grido della Distruzione",
			pt: "Grito da Destruição",
			de: "Ruf der Zerstörung"
		},

		effect: {
			en: "Discard up to 3 Special Energy from your opponent's Pokémon.",
			fr: "Défaussez jusqu'à 3 Énergies spéciales des Pokémon de votre adversaire.",
			es: "Descarta hasta 3 Energías Especiales de los Pokémon de tu rival.",
			it: "Scarta fino a tre Energie speciali dai Pokémon del tuo avversario.",
			pt: "Descarte até 3 Energias Especiais dos Pokémon do seu oponente.",
			de: "Lege bis zu 3 Spezial-Energien von Pokémon deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Dark Feather",
			fr: "Plume Ténébreuse",
			es: "Pluma Oscura",
			it: "Piuma Oscura",
			pt: "Pena Sombria",
			de: "Dunkelfeder"
		},

		damage: 100,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		en: "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more."
	},

	dexId: [717]
}

export default card
