import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		fr: "Fourbelin",
		en: "Morgrem",
		es: "Morgrem",
		it: "Morgrem",
		pt: "Morgrem",
		de: "Pelzebub"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Grimalin",
		en: "Impidimp"
	},

	attacks: [{
		name: {
			fr: "Morsure",
			en: "Bite",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Fourbette",
			en: "False Surrender",
			es: "Irreverencia",
			it: "Supplicolpo",
			pt: "Rendição Falsa",
			de: "Kniefalltrick"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "When it gets down on all fours as if to beg for forgiveness, it's trying to lure opponents in so that it can stab them with its spear-like hair."
	},

	thirdParty: {
		cardmarket: 539808
	}
}

export default card
