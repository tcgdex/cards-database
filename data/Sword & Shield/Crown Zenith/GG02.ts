import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Kricketune",
		fr: "Mélokrik",
		es: "Kricketune",
		it: "Kricketune",
		pt: "Kricketune",
		de: "Zirpeise"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
		es: "Kricketot",
		it: "Kricketot",
		pt: "Kricketot",
		de: "Zirpurze"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Swelling Tune",
			fr: "Mélodie Montante",
			es: "Melodía Rebosante",
			it: "Melodia Amplificata",
			pt: "Melodia Crescente",
			de: "Schwellender Gesang"
		},

		effect: {
			en: "Your Grass Pokémon in play, except any Kricketune, get +40 HP. You can't apply more than 1 Swelling Tune Ability at a time.",
			fr: "Vos Pokémon Grass en jeu, à l'exception de Mélokrik, reçoivent +40 PV. Vous ne pouvez utiliser qu'un talent Mélodie Montante à la fois.",
			es: "Tus Pokémon Grass en juego, excepto los Kricketune, obtienen 40 PS más. No puedes aplicar más de 1 habilidad Melodía Rebosante a la vez.",
			it: "I tuoi Pokémon Grass in gioco, a eccezione di qualsiasi Kricketune, hanno 40 PS in più. Non puoi applicare più di un'abilità Melodia Amplificata alla volta.",
			pt: "Seus Pokémon Grass em jogo, exceto por quaisquer Kricketune, recebem 40 PS a mais. Você não pode usar mais de 1 Habilidade Melodia Crescente por vez.",
			de: "Deine Grass-Pokémon im Spiel, außer Zirpeise, erhalten +40 KP. Du kannst immer nur jeweils 1 Fähigkeit Schwellender Gesang einsetzen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card