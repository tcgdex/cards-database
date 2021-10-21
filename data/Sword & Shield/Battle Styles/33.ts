import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		es: "Kingdra",
		it: "Kingdra",
		pt: "Kingdra",
		de: "Seedraking"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
		es: "Seadra",
		it: "Seadra",
		pt: "Seadra",
		de: "Seemon"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Deep Sea King",
			fr: "Roi des Abysses",
			es: "Rey del Mar Profundo",
			it: "Re degli Abissi",
			pt: "Rei do Mar Profundo",
			de: "Tiefseekönig"
		},

		effect: {
			en: "When your Active Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may move any amount of Water Energy from that Pokémon to this Pokémon.",
			fr: "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, vous pouvez déplacer autant d'Énergie Water que vous le voulez de ce Pokémon-là vers celui-ci.",
			es: "Cuando tu Pokémon Activo queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes mover cualquier cantidad de Energías Water de ese Pokémon a este Pokémon.",
			it: "Quando il tuo Pokémon attivo viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, puoi spostare un numero qualsiasi di Energie Water da quel Pokémon a questo Pokémon.",
			pt: "Quando seu Pokémon Ativo for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, você poderá mover qualquer quantidade de Energia Water daquele Pokémon para este Pokémon.",
			de: "Wenn dein Aktives Pokémon durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, kannst du beliebig viele Water-Energien von jenem Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			en: "Aqua Burst",
			fr: "Éclat Aquatique",
			es: "Estallido Acuático",
			it: "Idroscoppio",
			pt: "Explosão Aquática",
			de: "Aquasalve"
		},

		effect: {
			en: "This attack does 40 damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie Water attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño por cada Energía Water unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni per ogni Energia Water assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia Water ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 40 Schadenspunkte zu."
		},

		damage: "40×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It stores energy by sleeping at underwater depths at which no other life forms can survive."
	}
}

export default card
