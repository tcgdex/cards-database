import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Weezing",
		fr: "Smogogo de Galar",
		es: "Weezing de Galar",
		it: "Weezing di Galar",
		pt: "Weezing de Galar",
		de: "Galar-Smogmog"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Energy Factory",
			fr: "Usine d’Énergie",
			es: "Fábrica de Energía",
			it: "Fabbrica di Energia",
			pt: "Fábrica de Energia",
			de: "Energiefabrik"
		},

		effect: {
			en: "Each basic Darkness Energy attached to your Pokémon that have “Weezing” in their name provides DarknessDarkness Energy. You can’t apply more than 1 Energy Factory Ability at a time.",
			fr: "Chaque Énergie Darkness de base attachée à vos Pokémon ayant « Smogogo » dans leur nom fournit de l’Énergie DarknessDarkness. Vous ne pouvez utiliser qu’un talent Usine d’Énergie à la fois.",
			es: "Cada Energía Darkness Básica unida a tus Pokémon que tengan “Weezing” en su nombre proporciona 2 Energías Darkness. No puedes aplicar más de 1 habilidad Fábrica de Energía a la vez.",
			it: "Ogni Energia base Darkness assegnata ai tuoi Pokémon con “Weezing” nel nome fornisce Energia Darkness Darkness. Non puoi applicare più di un’abilità Fabbrica di Energia alla volta.",
			pt: "Cada Energia Darkness básica ligada aos seus Pokémon que tenham “Weezing” em seu nome fornece Energia DarknessDarkness. Você não pode usar mais de 1 Habilidade Fábrica de Energia por vez.",
			de: "Jede Basis-Darkness-Energie, die an deine Pokémon, bei denen das Wort „Smogmog“ zum Namen gehört, angelegt ist, liefert DarknessDarkness-Energie. Du kannst immer nur jeweils 1 Fähigkeit Energiefabrik einsetzen."
		}
	}],

	attacks: [{
		name: {
			en: "Suffocating Gas",
			fr: "Gaz Suffocant",
			es: "Gas Sofocante",
			it: "Gas Soffocante",
			pt: "Gás Asfixiante",
			de: "Würgegas"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Long ago, during a time when droves of factories fouled the air with pollution, Weezing changed into this form for some reason."
	}
}

export default card