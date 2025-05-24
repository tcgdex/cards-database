import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		es: "Miltank",
		pt: "Miltank",
		it: "Miltank",
		de: "Miltank"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			pt: "Rolagem",
			it: "Rotolamento",
			de: "Walzer"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Moomoo Rolling",
			fr: "Roulade Meumeu",
			es: "Giro Mu-mu",
			pt: "Moomoo Rolante",
			it: "Rotola Mumu",
			de: "Kuhmuh-Walze"
		},

		effect: {
			en: "You can use this attack only if this Pokémon used Rollout during your last turn.",
			fr: "Vous ne pouvez utiliser cette attaque que si ce Pokémon a utilisé Roulade pendant votre dernier tour.",
			es: "Puedes usar este ataque solo si este Pokémon usó Rodar durante tu último turno.",
			pt: "Você só pode usar este ataque se este Pokémon usou Rolagem durante o seu último turno.",
			it: "Puoi usare questo attacco solo se questo Pokémon ha usato Rotolamento durante il tuo ultimo turno.",
			de: "Du kannst diese Attacke nur einsetzen, wenn dieses Pokémon während deines letzten Zuges Walzer eingesetzt hat."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Keisin"
}

export default card