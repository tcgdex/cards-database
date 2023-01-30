import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		de: "Glurak"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Burn Brightly",
			fr: "Feu Éclatant",
			es: "Quemadura Viva",
			it: "Fuoco Acceso",
			pt: "Brilho Ardente",
			de: "Lichterloh brennen"
		},

		effect: {
			en: "Each basic Fire Energy attached to your Pokémon provides FireFire Energy. You can't apply more than 1 Burn Brightly Ability at a time.",
			fr: "Chaque Énergie Fire de base attachée à vos Pokémon fournit de l'Énergie FireFire. Vous ne pouvez utiliser qu'un talent Feu Éclatant à la fois.",
			es: "Cada Energía Fire Básica unida a tus Pokémon proporciona 2 Energías Fire. No puedes aplicar más de 1 habilidad Quemadura Viva a la vez.",
			it: "Ogni Energia base Fire assegnata ai tuoi Pokémon fornisce Energia FireFire. Non puoi applicare più di un'abilità Fuoco Acceso alla volta.",
			pt: "Cada Energia Fire básica ligada aos seus Pokémon fornece Energia FireFire. Você não pode usar mais de 1 Habilidade Brilho Ardente por vez.",
			de: "Jede an deine Pokémon angelegte Basis-Fire-Energie liefert FireFire-Energie. Du kannst immer nur jeweils 1 Fähigkeit Lichterloh brennen einsetzen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Flare Blitz",
			fr: "Boutefeu",
			es: "Envite Ígneo",
			it: "Fuococarica",
			pt: "Blitz de Labaredas",
			de: "Flammenblitz"
		},

		effect: {
			en: "Discard all Fire Energy from this Pokémon.",
			fr: "Défaussez toute l'Énergie Fire de ce Pokémon.",
			es: "Descarta todas las Energías Fire de este Pokémon.",
			it: "Scarta tutte le Energie Fire da questo Pokémon.",
			pt: "Descarte todas as Energias Fire deste Pokémon.",
			de: "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card