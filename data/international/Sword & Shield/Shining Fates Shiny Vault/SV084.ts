import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		'fr-fr': "Fourbelin",
		'en-us': "Morgrem",
		'es-es': "Morgrem",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'de-de': "Pelzebub"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Grimalin",
		'en-us': "Impidimp"
	},

	attacks: [{
		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			'fr-fr': "Fourbette",
			'en-us': "False Surrender",
			'es-es': "Irreverencia",
			'it-it': "Supplicolpo",
			'pt-br': "Rendição Falsa",
			'de-de': "Kniefalltrick"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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
		'en-us': "When it gets down on all fours as if to beg for forgiveness, it's trying to lure opponents in so that it can stab them with its spear-like hair."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539808,
				tcgplayer: 232465
			}
		},
	],
}

export default card
