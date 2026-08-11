import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [241],
	set: Set,

	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'es-es': "Miltank",
		'pt-br': "Miltank",
		'it-it': "Miltank",
		'de-de': "Miltank"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'pt-br': "Rolagem",
			'it-it': "Rotolamento",
			'de-de': "Walzer"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Moomoo Rolling",
			'fr-fr': "Roulade Meumeu",
			'es-es': "Giro Mu-mu",
			'pt-br': "Moomoo Rolante",
			'it-it': "Rotola Mumu",
			'de-de': "Kuhmuh-Walze"
		},

		effect: {
			'en-us': "You can use this attack only if this Pokémon used Rollout during your last turn.",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si ce Pokémon a utilisé Roulade pendant votre dernier tour.",
			'es-es': "Puedes usar este ataque solo si este Pokémon usó Rodar durante tu último turno.",
			'pt-br': "Você só pode usar este ataque se este Pokémon usou Rolagem durante o seu último turno.",
			'it-it': "Puoi usare questo attacco solo se questo Pokémon ha usato Rotolamento durante il tuo ultimo turno.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn dieses Pokémon während deines letzten Zuges Walzer eingesetzt hat."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Keisin",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805473,
				tcgplayer: 610436
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805473,
				tcgplayer: 610436
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806524,
				tcgplayer: 610595
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806525,
				tcgplayer: 610696
			}
		},
	],
}

export default card
