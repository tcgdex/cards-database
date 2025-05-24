import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [460],
	set: Set,

	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Freezing Disaster",
			fr: "Désastre Glaçant",
			es: "Desastre Gélido",
			it: "Disastro Congelante",
			pt: "Desastre Congelante",
			de: "Frostiges Desaster"
		},

		effect: {
			en: "Pokémon (both yours and your opponent's) can't be healed.",
			fr: "Les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
			es: "Los Pokémon (tanto tuyos como de tu rival) no pueden ser curados.",
			it: "I Pokémon, sia tuoi che del tuo avversario, non possono essere curati.",
			pt: "Os Pokémon (seus e do seu oponente) não podem ser curados.",
			de: "Pokémon (deine und die deines Gegners) können nicht geheilt werden."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Magnum Punch",
			fr: "Poing Magnum",
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
		normal: false,
		reverse: false
	},

	illustrator: "Hitoshi Ariga"
}

export default card