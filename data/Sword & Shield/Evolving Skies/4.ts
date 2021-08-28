import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Jumpluff",
		fr: "Cotovol",
		es: "Jumpluff",
		it: "Jumpluff",
		pt: "Jumpluff",
		de: "Papungha"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",
	illustrator: "Tika Matsuno",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fluffy Barrage",
			fr: "Offensive Douillette",
			es: "Ráfaga Sedosa",
			it: "Offensiva Morbida",
			pt: "Fluffy Barrage",
			de: "Flauschige Offensive"
		},

		effect: {
			en: "This Pokémon may attack twice each turn. If the first attack Knocks Out your opponent’s Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.",
			fr: "Ce Pokémon peut attaquer deux fois par tour. Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.",
			es: "Este Pokémon puede atacar 2 veces cada turno. Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, puedes atacar otra vez después de que tu rival elija un nuevo Pokémon Activo.",
			it: "Questo Pokémon può attaccare due volte per turno. Se il primo attacco mette KO il Pokémon attivo del tuo avversario, puoi attaccare di nuovo dopo che il tuo avversario ha scelto un nuovo Pokémon attivo.",
			pt: "This Pokémon may attack twice each turn. If the first attack Knocks Out your opponent’s Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.",
			de: "Dieses Pokémon kann während jedes Zuges zweimal angreifen. Falls die erste Attacke das Aktive Pokémon deines Gegners kampfunfähig macht, kannst du erneut angreifen, nachdem dein Gegner ein neues Aktives Pokémon gewählt hat."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Spinning Attack",
			de: "Rundumangriff"
		},

		damage: 60,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0
}

export default card