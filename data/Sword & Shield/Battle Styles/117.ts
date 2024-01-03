import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Stoutland V",
		fr: "Mastouffe V",
		es: "Stoutland V",
		it: "Stoutland V",
		pt: "Stoutland V",
		de: "Bissbark V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Double Dip Fangs",
			fr: "Crocs Redoublés",
			es: "Ración Doble de Colmillos",
			it: "Zanne Ingorde",
			pt: "Presas do Repeteco",
			de: "Nachbeißer"
		},

		effect: {
			en: "If your opponent's Basic Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			fr: "Si le Pokémon de base de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			es: "Si un Pokémon Básico de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
			it: "Se un Pokémon Base del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
			pt: "Se o Pokémon Básico do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
			de: "Wenn ein Basis-Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
			es: "Placaje Salvaje",
			it: "Azionferoce",
			pt: "Investida Feroz",
			de: "Wilder Tackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
