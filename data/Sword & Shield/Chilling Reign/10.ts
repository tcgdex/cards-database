import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Toughness Boost",
			fr: "Boost d’Endurance",
			es: "Impulso Vigorizante",
			it: "Carica di Tenacia",
			pt: "Impulso da Determinação",
			de: "Stärkeschub"
		},

		effect: {
			en: "Your Single Strike Pokémon in play, except any Abomasnow, get +50 HP. You can’t apply more than 1 Toughness Boost Ability at a time.",
			fr: "Vos Pokémon Poing Final en jeu, à l’exception de Blizzaroi, reçoivent +50 PV. Vous ne pouvez utiliser qu’un talent Boost d’Endurance à la fois.",
			es: "Tus Pokémon Golpe Brusco en juego, excepto los Abomasnow, obtienen 50 PS más. No puedes aplicar más de 1 habilidad Impulso Vigorizante a la vez.",
			it: "I tuoi Pokémon Colpo Singolo in gioco, a eccezione di qualsiasi Abomasnow, hanno 50 PS in più. Non puoi applicare più di un’abilità Carica di Tenacia alla volta.",
			pt: "Seus Pokémon Golpe Decisivo em jogo, exceto por quaisquer Abomasnow, recebem 50 PS a mais. Você não pode usar mais de 1 Habilidade Impulso da Determinação por vez.",
			de: "Deine Fokussierter-Angriff-Pokémon im Spiel, außer Rexblisar, erhalten +50 KP. Du kannst immer nur jeweils 1 Fähigkeit Stärkeschub einsetzen."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			pt: "Megassoco",
			de: "Megahieb"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card