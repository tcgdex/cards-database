import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [460],
	set: Set,

	name: {
		fr: "Blizzaroi",
		en: "Abomasnow",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Désastre Glaçant",
			en: "Freezing Disaster",
			es: "Desastre Gélido",
			it: "Disastro Congelante",
			pt: "Desastre Congelante",
			de: "Frostiges Desaster"
		},

		effect: {
			fr: "Les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
			en: "Pokémon (both yours and your opponent's) can't be healed.",
			es: "Los Pokémon (tanto tuyos como de tu rival) no pueden ser curados.",
			it: "I Pokémon, sia tuoi che del tuo avversario, non possono essere curati.",
			pt: "Os Pokémon (seus e do seu oponente) não podem ser curados.",
			de: "Pokémon (deine und die deines Gegners) können nicht geheilt werden."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			fr: "Poing Magnum",
			en: "Magnum Punch",
			es: "Puño Mágnum",
			it: "Superpugno",
			pt: "Soco Magnum",
			de: "Magnum-Schlag"
		},

		damage: 110
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Ryuta Fuse"
}

export default card
