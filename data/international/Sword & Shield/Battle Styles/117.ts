import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [508],
	set: Set,

	name: {
		'en-us': "Stoutland V",
		'fr-fr': "Mastouffe V",
		'es-es': "Stoutland V",
		'it-it': "Stoutland V",
		'pt-br': "Stoutland V",
		'de-de': "Bissbark V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Double Dip Fangs",
			'fr-fr': "Crocs Redoublés",
			'es-es': "Ración Doble de Colmillos",
			'it-it': "Zanne Ingorde",
			'pt-br': "Presas do Repeteco",
			'de-de': "Nachbeißer"
		},

		effect: {
			'en-us': "If your opponent's Basic Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			'fr-fr': "Si le Pokémon de base de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			'es-es': "Si un Pokémon Básico de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
			'it-it': "Se un Pokémon Base del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
			'pt-br': "Se o Pokémon Básico do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
			'de-de': "Wenn ein Basis-Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Wild Tackle",
			'fr-fr': "Tacle Brutal",
			'es-es': "Placaje Salvaje",
			'it-it': "Azionferoce",
			'pt-br': "Investida Feroz",
			'de-de': "Wilder Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545691,
				tcgplayer: 234159
			}
		},
	],
}

export default card
